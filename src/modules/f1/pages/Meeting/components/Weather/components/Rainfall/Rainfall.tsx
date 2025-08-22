import { Box, Image } from "@chakra-ui/react";
import { type IRainfallProps } from "./Rainfall.props";
import { styles } from "./Rainfall.style";
import { pngs } from "@/modules/f1/assets/pngs";

export const Rainfall = ({ isRaining = false, size = 65 }: IRainfallProps) => {
  return (
    <Box w={size} h={size} css={styles.container}>
      <Image
        w={size}
        h={size}
        src={isRaining ? pngs.raining : pngs.notRaining}
      />
    </Box>
  );
};
