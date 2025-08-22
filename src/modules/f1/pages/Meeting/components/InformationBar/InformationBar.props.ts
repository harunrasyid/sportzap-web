interface IMeetingInformation {
  meetingName: string;
  sesstionName: string;
  time: string;
}

interface IWeather {
  airTemprature: number;
  rainfall: boolean;
  trackTemprature: number;
  windDirection: string;
  windSpeed: number;
}

interface ILaps {
  currentLap: number;
  totalLaps: number;
}

export interface IInformationBarProps {
  meetingInformation: IMeetingInformation;
  weather: IWeather;
  laps: ILaps;
}
