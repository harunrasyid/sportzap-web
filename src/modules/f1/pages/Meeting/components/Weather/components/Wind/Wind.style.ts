import { color } from "@/shared/styles";
import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bg: color.noirEclipse[600],
    borderRadius: "full",
    border: `1px solid ${color.noirEclipse[300]}`,
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
