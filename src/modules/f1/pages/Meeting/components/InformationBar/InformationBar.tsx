import { Box } from "@chakra-ui/react";
import { MeetingInformation } from "../MeetingInformation";
import { Weather } from "../Weather";
import { styles } from "./InformationBar.style";
import { Laps } from "../Laps";

export const InformationBar = () => {
  return (
    <Box css={styles.bar}>
      {/* Meeting Information & Timing */}
      <MeetingInformation
        meetingName={"ABCD"}
        sesstionName="Abcd"
        time="1:0:0"
      />

      {/* Environtment Condition */}
      <Weather
        airTemprature={10}
        rainfall={false}
        trackTemprature={10}
        windDirection={"SW"}
        windSpeed={10}
      />

      {/* Laps */}
      <Laps currentLap={60} totalLaps={65} />
    </Box>
  );
};
