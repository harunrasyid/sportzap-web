import { VStack } from "@chakra-ui/react";
import { styles } from "./Meeting.style";
import { InformationBar } from "./components/InformationBar";
import { useInformationBar } from "./hooks/useInformationBar";

export const Meeting = () => {
  const informationBar = useInformationBar();

  return (
    <VStack css={styles.page}>
      {/* Information Bar */}
      <InformationBar {...informationBar} />

      {/* Main Content */}

      {/* Timeline */}
    </VStack>
  );
};
