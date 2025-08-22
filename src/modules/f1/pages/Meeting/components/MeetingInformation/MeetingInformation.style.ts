import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  raceName: {
    fontSize: "12px",
    fontWeight: 700,
  },
  raceTime: {
    fontSize: "24px",
    fontWeight: 800,
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
