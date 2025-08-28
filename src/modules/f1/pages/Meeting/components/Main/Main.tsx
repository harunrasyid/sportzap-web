import { Box, VStack } from "@chakra-ui/react";
import { styles } from "./Main.style";
import { Location } from "../Location";
import { useLocation } from "./hooks/useLocation";
import { useDrivers } from "./hooks/useDrivers";

const SESSION_KEY = 9979;

export const Main = () => {
  const { driverList } = useDrivers(SESSION_KEY);
  const { data } = useLocation(SESSION_KEY, driverList);

  return (
    <Box css={styles.container}>
      {/* Standings */}
      <VStack css={styles.standings}></VStack>

      {/* Location Tracking */}
      <Location raceData={data} />
    </Box>
  );
};
