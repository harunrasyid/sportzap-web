import { color } from "@/shared/styles";
import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  page: {
    height: "100dvh",
    width: "100vw",

    // Background related
    backgroundColor: color.backgrounds.primary,
  },
  card: {
    // display: "flex",
    backgroundColor: color.noirEclipse[800],
    borderRadius: 12,
    padding: '12px 24px',
    border: `1px solid ${color.noirEclipse[400]}`
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  textSpacing: {
    marginBottom: '4px'
  },
  pill: {
    backgroundColor: color.noirEclipse[400],
    borderRadius: 4,
    width: 'fit-content',
    padding: '2px 12px',
    fontWeight: 600,
    fontSize: 12,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  }
} satisfies Record<string, SystemStyleObject>;

export { styles };
