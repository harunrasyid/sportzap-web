import { Text } from "@chakra-ui/react";
import type { ILapsProps } from "./Laps.props";
import { styles } from "./Laps.style";

export const Laps = ({ currentLap, totalLaps }: ILapsProps) => {
  return <Text css={styles.laps}>{`${currentLap} / ${totalLaps}`}</Text>;
};
