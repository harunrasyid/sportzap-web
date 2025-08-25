import type { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  page: {
    minHeight: "90dvh",
    width: "100vw",
    position: 'relative',
    margin: '-80px',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    // zIndex: -1,
  },
  bgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    // backgroundImage: gradie
  },
  headlineContainer: {
    position: 'relative',
    zIndex: 20,
    display: 'grid',
    // placeContent: 'center',
    alignItems: "center",
    height: '90dvh',
  }
} satisfies Record<string, SystemStyleObject>;

export { styles };
