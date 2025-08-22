import { Grid, GridItem } from "@chakra-ui/react";
import type { ISchedule } from "../types/Schedule.type";
import { useQuery } from "@tanstack/react-query";
import { ScheduleCard } from "./ScheduleCard";
import type { IMeeting } from "../types/Meeting.type";

// const fetchSchedules = async (): Promise<ISchedule[]> => {
//   const url = "https://api.openf1.org/v1/sessions?date_start>=2025-01-01&date_end<=2025-10-30"

//   try {
//     const res = await fetch(url)
//     return res.json()
//   } catch (_error) {
//     throw new Error("Failed to fetch schedules");
//   }
// }

const fetchMeetings = async (): Promise<IMeeting[]> => {
  const url = "https://api.openf1.org/v1/meetings?year=2025"

  try {
    const res = await fetch(url)
    return res.json()
  } catch (_error) {
    throw new Error("Failed to fetch schedules");
  }
}

export function ScheduleGrid() {
  const { data } = useQuery({
    queryKey: ['meetings'],
    queryFn: fetchMeetings
  })

  console.log(data);

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap="6">
      {!!data && data.map((schedule, index) => (
        <GridItem key={index} colSpan={4}>
          <ScheduleCard schedule={schedule} />
        </GridItem>
      ))}
    </Grid>
  )
}
