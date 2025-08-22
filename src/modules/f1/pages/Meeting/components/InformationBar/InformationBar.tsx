import { Box } from "@chakra-ui/react";
import { MeetingInformation } from "../MeetingInformation";
import { Weather } from "../Weather";
import { Laps } from "../Laps";
import { styles } from "./InformationBar.style";
import type { IInformationBarProps } from "./InformationBar.props";

export const InformationBar = ({
  meetingInformation,
  weather,
  laps,
}: IInformationBarProps) => {
  return (
    <Box css={styles.bar}>
      {/* Meeting Information & Timing */}
      <MeetingInformation {...meetingInformation} />

      {/* Environtment Condition */}
      <Weather {...weather} />

      {/* Laps */}
      <Laps {...laps} />
    </Box>
  );
};
