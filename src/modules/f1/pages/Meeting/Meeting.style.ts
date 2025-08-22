import { color } from "@/shared/styles";
import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    height: "100dvh",
    width: "100vw",
    padding: "16px",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    // Background related
    backgroundColor: color.backgrounds.primary,
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
