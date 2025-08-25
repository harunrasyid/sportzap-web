import { VStack } from "@chakra-ui/react";
import { InformationBar } from "./components/InformationBar";
import { Main } from "./components/Main";
import { useInformationBar } from "./hooks/useInformationBar";
import { styles } from "./Meeting.style";

export const Meeting = () => {
  const informationBar = useInformationBar();

  return (
    <VStack css={styles.page}>
      {/* Information Bar */}
      <InformationBar {...informationBar} />

      {/* Main Content */}
      <Main />

      {/* Timeline */}
    </VStack>
  );
};
