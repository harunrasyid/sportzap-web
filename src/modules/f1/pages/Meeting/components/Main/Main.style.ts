import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: { base: "column", lg: "row" },
  },

  standings: {
    flex: 1,
    height: "100%",
  },

  location: {
    bg: "red",
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
