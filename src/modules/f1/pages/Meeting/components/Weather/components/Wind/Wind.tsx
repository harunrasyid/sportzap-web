import { Box, Text } from "@chakra-ui/react";
import { styles } from "./Wind.style";
import { type IWindProps } from "./Wind.props";

export const Wind = ({
  value = 0,
  label = "m/s",
  colors = {
    background: "#2a2a2a",
    text: "#ffffff",
  },
  size = 65,
  direction = "",
}: IWindProps) => {
  return (
    <Box w={size} h={size} css={styles.center}>
      <Text color={colors.text} css={styles.label}>
        {direction}
      </Text>
      <Text css={styles.value} color={colors.text}>
        {value}
      </Text>
      <Text color={colors.text} css={styles.label}>
        {label}
      </Text>
    </Box>
  );
};
