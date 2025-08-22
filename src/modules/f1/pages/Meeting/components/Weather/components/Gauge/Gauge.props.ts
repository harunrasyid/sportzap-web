interface GaugeColors {
  background: string;
  progress: [string, string, string]; // [red, orange, green]
  text: string;
}

export interface IGaugeProps {
  value?: number;
  maxValue?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  colors?: GaugeColors;
}
