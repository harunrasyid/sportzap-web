import { Box, VStack } from "@chakra-ui/react";
import { styles } from "./Main.style";

export const Main = () => {
  return (
    <Box css={styles.container}>
      {/* Standings */}
      <VStack css={styles.standings}></VStack>

      {/* Location Tracking */}
      <VStack css={styles.location}></VStack>
    </Box>
  );
};
