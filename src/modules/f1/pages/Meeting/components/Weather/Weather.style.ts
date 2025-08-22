import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
