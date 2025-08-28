import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  Badge,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { Play, Pause, Square, ChevronLeft, ChevronRight } from "lucide-react";
import type { IBound, IScaledCoordinate } from "./Location.props";

// Type definitions
interface RaceDataPoint {
  date: string;
  driver_number: number;
  meeting_key: number;
  session_key: number;
  x: number;
  y: number;
  z: number;
}

interface RaceReplayCanvasProps {
  raceData?: RaceDataPoint[];
}

interface DriverColors {
  [key: number]: string;
}

export const Location: React.FC<RaceReplayCanvasProps> = ({
  raceData = [],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(10);
  const [hoveredCar, setHoveredCar] = useState<number | null>(null);
  const [showTrail, setShowTrail] = useState<boolean>(false);

  const CANVAS_WIDTH: number = 800;
  const CANVAS_HEIGHT: number = 500;
  const CAR_RADIUS: number = 8;
  const TRAIL_LENGTH: number = 100000;

  // Process and sort data by timestamp
  const processedData: RaceDataPoint[][] = React.useMemo(() => {
    const sortedData = [...raceData].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const groupedByTime: { [key: string]: RaceDataPoint[] } = {};
    sortedData.forEach((point) => {
      const timestamp = point.date;
      if (!groupedByTime[timestamp]) {
        groupedByTime[timestamp] = [];
      }
      groupedByTime[timestamp].push(point);
    });

    return Object.values(groupedByTime);
  }, [raceData]);

  // Get unique drivers and their colors
  const drivers: number[] = React.useMemo(() => {
    const driverSet = new Set(raceData.map((d) => d.driver_number));
    return Array.from(driverSet);
  }, [raceData]);

  const driverColors: DriverColors = {
    81: "#FF6B6B",
    44: "#4ECDC4",
    1: "#45B7D1",
    16: "#F9CA24",
    55: "#6C5CE7",
    77: "#26DE81",
    33: "#FD79A8",
    11: "#A29BFE",
    63: "#6C5CE7",
    18: "#00B894",
  };

  // Calculate bounds for scaling
  const bounds: IBound = React.useMemo(() => {
    if (raceData.length === 0)
      return { minX: 0, maxX: 100, minY: 0, maxY: 100 };

    const minX = Math.min(...raceData.map((d) => d.x));
    const maxX = Math.max(...raceData.map((d) => d.x));
    const minY = Math.min(...raceData.map((d) => d.y));
    const maxY = Math.max(...raceData.map((d) => d.y));

    return { minX, maxX, minY, maxY };
  }, [raceData]);

  // Scale coordinates to canvas
  const scaleCoordinates = useCallback(
    (x: number, y: number): IScaledCoordinate => {
      const padding = 40;
      const scaledX =
        ((x - bounds.minX) / (bounds.maxX - bounds.minX)) *
          (CANVAS_WIDTH - padding * 2) +
        padding;
      const scaledY =
        ((y - bounds.minY) / (bounds.maxY - bounds.minY)) *
          (CANVAS_HEIGHT - padding * 2) +
        padding;
      return { x: scaledX, y: scaledY };
    },
    [bounds]
  );

  // Store car trails
  const carTrails = useRef<Map<number, IScaledCoordinate[]>>(new Map());

  // Update trails
  const updateTrails = useCallback(
    (currentData: RaceDataPoint[]): void => {
      currentData.forEach((car) => {
        if (!carTrails.current.has(car.driver_number)) {
          carTrails.current.set(car.driver_number, []);
        }

        const trail = carTrails.current.get(car.driver_number)!;
        const scaledPos = scaleCoordinates(car.x, car.y);

        trail.push(scaledPos);
      });
    },
    [scaleCoordinates]
  );

  // Clear canvas
  const clearCanvas = useCallback((ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw track background
    ctx.fillStyle = "#f0f8f0";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw track border
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Add grid lines
    ctx.strokeStyle = "#e0e0e0";
    ctx.lineWidth = 1;
    for (let i = 0; i < CANVAS_WIDTH; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, CANVAS_HEIGHT);
      ctx.stroke();
    }
    for (let i = 0; i < CANVAS_HEIGHT; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(CANVAS_WIDTH, i);
      ctx.stroke();
    }
  }, []);

  // Draw car trails
  const drawTrails = useCallback(
    (ctx: CanvasRenderingContext2D): void => {
      if (!showTrail) return;

      carTrails.current.forEach((trail, driverNumber) => {
        if (trail.length < 2) return;

        const color = driverColors[driverNumber] || "#333";

        for (let i = 1; i < trail.length; i++) {
          const opacity = (i / trail.length) * 0.5;
          const alpha = Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0");
          ctx.strokeStyle = color + alpha;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.stroke();
        }
      });
    },
    [showTrail, driverColors]
  );

  // Draw cars
  const drawCars = useCallback(
    (ctx: CanvasRenderingContext2D, currentData: RaceDataPoint[]): void => {
      currentData.forEach((car) => {
        const { x, y } = scaleCoordinates(car.x, car.y);
        const color = driverColors[car.driver_number] || "#333";
        const isHovered = hoveredCar === car.driver_number;

        // Car shadow
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.beginPath();
        ctx.arc(x + 2, y + 2, CAR_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        // Car body
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, isHovered ? CAR_RADIUS + 2 : CAR_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        // Car border
        ctx.strokeStyle = isHovered ? "#fff" : "#333";
        ctx.lineWidth = isHovered ? 3 : 2;
        ctx.stroke();

        // Driver number
        ctx.fillStyle = "#fff";
        ctx.font = isHovered ? "bold 12px Arial" : "bold 10px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(car.driver_number.toString(), x, y);

        // Speed indicator (based on z coordinate change)
        if (isHovered) {
          ctx.fillStyle = "#333";
          ctx.font = "10px Arial";
          ctx.fillText(`Z: ${car.z}`, x, y + 20);
        }
      });
    },
    [scaleCoordinates, driverColors, hoveredCar]
  );

  // Main render function
  const render = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas || !processedData.length) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentData = processedData[currentFrame] || [];

    // Update trails
    updateTrails(currentData);

    // Clear and draw
    clearCanvas(ctx);
    drawTrails(ctx);
    drawCars(ctx, currentData);
  }, [
    currentFrame,
    processedData,
    updateTrails,
    clearCanvas,
    drawTrails,
    drawCars,
  ]);

  // Handle mouse events for hover
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement>): void => {
      const canvas = canvasRef.current;
      if (!canvas || !processedData.length) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const currentData = processedData[currentFrame] || [];
      let foundCar: number | null = null;

      currentData.forEach((car) => {
        const { x, y } = scaleCoordinates(car.x, car.y);
        const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
        if (distance <= CAR_RADIUS + 5) {
          foundCar = car.driver_number;
        }
      });

      setHoveredCar(foundCar);
    },
    [currentFrame, processedData, scaleCoordinates]
  );

  // Animation loop
  useEffect(() => {
    const animate = (timestamp: number): void => {
      if (isPlaying && timestamp - lastTimeRef.current >= 1000 / speed) {
        if (currentFrame < processedData.length - 1) {
          setCurrentFrame((prev) => prev + 1);
          lastTimeRef.current = timestamp;
        } else {
          setIsPlaying(false);
        }
      }

      if (isPlaying) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, currentFrame, processedData.length, speed]);

  // Render canvas when data changes
  useEffect(() => {
    render();
  }, [render]);

  // Event handlers
  const play = (): void => setIsPlaying(true);
  const pause = (): void => setIsPlaying(false);
  const stop = (): void => {
    setIsPlaying(false);
    setCurrentFrame(0);
    carTrails.current.clear();
  };
  const stepForward = (): void => {
    if (currentFrame < processedData.length - 1) {
      setCurrentFrame((prev) => prev + 1);
    }
  };
  const stepBackward = (): void => {
    if (currentFrame > 0) {
      setCurrentFrame((prev) => prev - 1);
    }
  };

  const currentData = processedData[currentFrame] || [];
  const currentTimestamp = currentData[0]?.date
    ? new Date(currentData[0].date).toLocaleTimeString()
    : "";

  return (
    <Container maxW="6xl" p={6}>
      <VStack>
        {/* Canvas */}
        <Box
          border="2px solid"
          borderColor="gray.300"
          borderRadius="md"
          overflow="hidden"
          bg="white"
        >
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredCar(null)}
            style={{
              display: "block",
              cursor: hoveredCar ? "pointer" : "default",
            }}
          />
        </Box>

        {/* Controls */}
        <VStack width="800px">
          {/* Timeline Slider */}
          <Box width="100%">
            <Text mb={2} fontSize="sm" color="gray.600">
              Timeline
            </Text>
          </Box>

          {/* Playback Controls */}
          <HStack>
            <IconButton
              onClick={stepBackward}
              disabled={currentFrame === 0}
              aria-label="Step backward"
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={isPlaying ? pause : play}
              disabled={currentFrame >= processedData.length - 1}
              colorScheme={isPlaying ? "orange" : "green"}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {!isPlaying ? <Play /> : <Pause />}
            </IconButton>

            <IconButton onClick={stop} aria-label="Stop">
              <Square />
            </IconButton>

            <IconButton
              onClick={stepForward}
              disabled={currentFrame >= processedData.length - 1}
              aria-label="Step forward"
            >
              <ChevronRight />
            </IconButton>

            <Button
              size="sm"
              variant={showTrail ? "solid" : "outline"}
              colorScheme="purple"
              onClick={() => setShowTrail(!showTrail)}
            >
              {showTrail ? "Hide" : "Show"} Trails
            </Button>
          </HStack>

          {/* Speed Control */}
          <HStack width="300px">
            <Text fontSize="sm">Speed:</Text>
            <Text fontSize="sm" width="50px">
              {speed.toFixed(1)}x
            </Text>
          </HStack>
        </VStack>

        {/* Driver Legend */}
        <HStack wrap="wrap">
          {drivers.map((driverNum: number) => (
            <Badge
              key={driverNum}
              colorScheme={hoveredCar === driverNum ? "blue" : "gray"}
              variant={hoveredCar === driverNum ? "solid" : "outline"}
              px={3}
              py={1}
              borderRadius="full"
              cursor="pointer"
            >
              <Box
                as="span"
                display="inline-block"
                width="8px"
                height="8px"
                borderRadius="50%"
                bg={driverColors[driverNum] || "#333"}
                mr={2}
              />
              Driver #{driverNum}
            </Badge>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};
