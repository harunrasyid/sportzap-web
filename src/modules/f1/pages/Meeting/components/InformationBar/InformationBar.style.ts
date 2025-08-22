import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  bar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: `8px 16px`,
    alignItems: "center",
    justifyContent: "space-between",

    // Glass morphism effect
    bg: "whiteAlpha.200",
    backdropFilter: "blur(12px) saturate(130%)",
    border: "1px solid",
    borderColor: "whiteAlpha.300",
    rounded: "8px",
    _before: {
      content: '""',
      position: "absolute",
      inset: 0,
      rounded: "inherit",
      border: "1px solid",
      borderColor: "whiteAlpha.200",
      pointerEvents: "none",
    },
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
