import { Box, Text, VStack } from "@chakra-ui/react";
import { type IGaugeProps } from "./Gauge.props";
import { styles } from "./Gauge.style";

export const Gauge = ({
  value = 0,
  maxValue = 100,
  size = 65,
  strokeWidth = 7,
  label,
  colors = {
    background: "#2a2a2a",
    progress: ["#44ff44", "#ffaa00", "#ff4444"],
    text: "#ffffff",
  },
}: IGaugeProps) => {
  const radius: number = (size - strokeWidth) / 2;
  const circumference: number = Math.PI * radius; // Half circle circumference
  const percentage: number = (value / maxValue) * 100;
  const strokeDasharray: number = circumference;
  const strokeDashoffset: number =
    circumference - (percentage / 100) * circumference;

  // Calculate color based on percentage
  const getProgressColor = (percentage: number): string => {
    if (percentage <= 33) {
      return colors.progress[0]; // Red
    } else if (percentage <= 66) {
      return colors.progress[1]; // Orange
    } else {
      return colors.progress[2]; // Green
    }
  };

  const progressColor: string = getProgressColor(percentage);

  return (
    <Box css={styles.container}>
      <svg width={size} height={size / 2 + strokeWidth / 2 + 20}>
        {/* Background semi-circle */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke={colors.background}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Progress semi-circle */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.6s ease-in-out, stroke 0.3s ease",
          }}
        />
      </svg>

      {/* Center text */}
      <VStack css={styles.center}>
        <Text css={styles.value} color={colors.text}>
          {value}
        </Text>
        <Text color={colors.text} css={styles.label}>
          {label}
        </Text>
      </VStack>
    </Box>
  );
};
