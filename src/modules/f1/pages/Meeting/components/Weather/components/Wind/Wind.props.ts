interface GaugeColors {
  background: string;
  text: string;
}

export interface IWindProps {
  value?: number;
  size?: number;
  label?: string;
  direction?: string;
  colors?: GaugeColors;
}
