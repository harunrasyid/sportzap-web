import { Box, Text } from "@chakra-ui/react";
import { styles } from "./MeetingInformation.style";
import { type IMeetingInformationProps } from "./MeetingInformation.props";

export const MeetingInformation = ({
  meetingName,
  sesstionName,
  time,
}: IMeetingInformationProps) => {
  return (
    <Box css={styles.container}>
      <Text css={styles.raceName}>{`${meetingName}: ${sesstionName}`}</Text>
      <Text css={styles.raceTime}>{`${time}`}</Text>
    </Box>
  );
};
