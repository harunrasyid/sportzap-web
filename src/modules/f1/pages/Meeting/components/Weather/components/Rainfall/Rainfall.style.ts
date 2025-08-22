import { color } from "@/shared/styles";
import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    bg: color.noirEclipse[600],
    borderRadius: "full",
    border: `1px solid ${color.noirEclipse[300]}`,
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
