import { color } from "@/shared/styles";
import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    height: "100dvh",
    width: "100vw",
    padding: "16px",
    alignItems: "center",
    justifyContent: "center",

    // Background related
    backgroundColor: color.backgrounds.primary,
  },

  title: {
    fontSize: "48px",
    fontWeight: 800,
  },

  selector: {
    display: "flex",
    width: "100%",
  },
  grid: {
    width: "100%",
    gap: "16px",
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
