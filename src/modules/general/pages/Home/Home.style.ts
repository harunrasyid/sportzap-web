import { color } from "@/shared/styles";
import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  page: {
    height: "100dvh",
    width: "100vw",

    // Background related
    backgroundColor: color.backgrounds.primary,
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
