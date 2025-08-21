import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { styles } from "./SportCard.style";
import type { ISportCardProps } from "./SportCard.props";

export const SportCard = ({ title, image }: ISportCardProps) => {
  return (
    <VStack as={"button"} css={styles.card}>
      <HStack css={styles.container}>
        {/* Content */}
        <Text css={styles.title}>{`${title}`}</Text>

        {/* Image */}
        <Image src={image} alt={title} css={styles.image} />
      </HStack>
    </VStack>
  );
};
