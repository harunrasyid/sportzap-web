import { Box } from "@chakra-ui/react";
import { Gauge } from "./components/Gauge";
import { Wind } from "./components/Wind";
import { Rainfall } from "./components/Rainfall";
import { type IWeatherProps } from "./Weather.props";
import { styles } from "./Weather.style";

export const Weather = ({
  airTemprature,
  trackTemprature,
  windSpeed,
  windDirection,
  rainfall,
}: IWeatherProps) => {
  return (
    <Box css={styles.container}>
      {/* Track Temp */}
      <Gauge value={trackTemprature} label={"TRC"} />

      {/* Air Temp */}
      <Gauge value={airTemprature} label={"AIR"} />

      {/* Wind Speed & Wind Direction */}
      <Wind value={windSpeed} direction={windDirection} />

      {/* Rainfall */}
      <Rainfall isRaining={rainfall} />
    </Box>
  );
};
