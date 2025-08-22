import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  container: {
    position: "relative",
    display: "inline-block",
  },

  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  value: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "1",
  },
  label: {
    fontSize: "10px",
    letterSpacing: "wider",
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
