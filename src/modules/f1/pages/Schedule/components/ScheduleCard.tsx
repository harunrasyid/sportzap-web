import { Text } from "@chakra-ui/react";
import { styles } from "../Schedule.style";
import { convertDate } from "../utils";
import { color } from "@/shared/styles";
import type { IMeeting } from "../types/Meeting.type";

export function ScheduleCard({ schedule }: { schedule: IMeeting }) {
  return (
    <div style={styles.card}>
      <div>
        <div style={styles.row}>
          <Text textAlign={'left'} fontSize={'sm'} color={'#fff'}>{schedule.location}</Text>
          <div style={styles.pill}>
            <Text color={'#fff'} textTransform={'uppercase'} >{schedule.circuit_short_name}</Text>
          </div>
        </div>
        <Text as={'h2'} fontWeight={600} css={styles.textSpacing} textAlign={'left'} fontSize={'2xl'} color={'#fff'}>{schedule.country_name}</Text>
        <Text as={'h2'} fontWeight={600} css={styles.textSpacing} textAlign={'left'} fontSize={'sm'} color={'#fff'}>{schedule.meeting_official_name}</Text>
        <Text fontSize={'xs'} textAlign={'left'} fontWeight={600} color={color.noirEclipse[50]}>
          {convertDate(schedule.date_start)}
        </Text>
      </div>
    </div>
  )
}
