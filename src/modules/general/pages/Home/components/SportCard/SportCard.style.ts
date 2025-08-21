import { color } from "@/shared/styles";
import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  card: {
    border: `1px solid ${color.noirEclipse[400]}`,
    borderRadius: "8px",
    _hover: { bg: color.noirEclipse[400] },

    // Background related
    backgroundColor: color.backgrounds.primary,
  },

  container: {
    display: "flex",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: `24px 16px`,
  },

  title: {
    fontSize: "32px",
    fontWeight: 800,
  },

  image: {
    width: "50%",
    objectFit: "contain",
    objectPosition: "center",
  },
} satisfies Record<string, SystemStyleObject>;

export { styles };
