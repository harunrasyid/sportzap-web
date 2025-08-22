import { VStack } from "@chakra-ui/react";
import { styles } from "./Meeting.style";
import { InformationBar } from "./components/InformationBar";

export const Meeting = () => {
  return (
    <VStack css={styles.page}>
      {/* Information Bar */}
      <InformationBar />

      {/* Main Content */}

      {/* Timeline */}
    </VStack>
  );
};
