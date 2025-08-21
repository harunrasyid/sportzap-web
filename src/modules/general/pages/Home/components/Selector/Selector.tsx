import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { SportCard } from "../SportCard";
import { styles } from "./Selector.style";
import { type ISelector } from "./Selector.props";

export const Selector = ({ sports }: ISelector) => {
  return (
    <VStack css={styles.selector}>
      {/* Title */}
      <Text css={styles.title}>Choose your sport:</Text>

      {/* Cards */}
      <SimpleGrid columns={{ base: 1 }} css={styles.grid}>
        {sports.map((sport) => (
          <SportCard key={sport.title} {...sport} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
