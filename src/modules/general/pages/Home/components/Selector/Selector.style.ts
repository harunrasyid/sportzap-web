import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  title: {
    fontSize: "16px",
    fontWeight: 700,
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
