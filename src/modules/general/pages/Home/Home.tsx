import { Text, VStack } from "@chakra-ui/react";
import { pngs } from "../../assets/pngs";
import { Selector } from "./components/Selector";
import { styles } from "./Home.style";

const SPORTS = [
  {
    title: "Formula 1",
    image: pngs.f1,
  },
];

export const Home = () => {
  return (
    <VStack gap={"32px"} css={styles.page}>
      {/* Title */}
      <Text css={styles.title}>SportZap</Text>

      {/* Selector */}
      <Selector sports={SPORTS} />
    </VStack>
  );
};
