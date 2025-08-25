import { Grid, GridItem, Text, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ScheduleCard } from "./ScheduleCard";
import useScheduleYear from "../context/useScheduleYear";
import { fetchMeetings } from "../queries/meeting";

export function ScheduleGrid() {
  const { year, countryCode } = useScheduleYear();
  const { data, error, isLoading } = useQuery({
    queryKey: ['meetings', year[0], countryCode],
    queryFn: () => fetchMeetings(year, countryCode.toUpperCase())
  })

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap="6" width={'100%'}>
      {isLoading ? (
        Array(3).fill(null).map((_, index) => (
          <GridItem key={index} colSpan={4}>
            <Skeleton height="150px" />
          </GridItem>
        ))
      ) : data ? (
        data.length > 0 ? (
          data.map((schedule, index) => (
            <GridItem key={index} colSpan={4}>
              <ScheduleCard schedule={schedule} />
            </GridItem>
          ))
        ) :
          <GridItem colSpan={4}>
            <Text textAlign={'left'}>No data available</Text>
          </GridItem>
      ) : error && (
        <GridItem colSpan={4}>
          <Text textAlign={'left'}>Failed to fetch data</Text>
        </GridItem>
      )}
    </Grid>
  )
}
