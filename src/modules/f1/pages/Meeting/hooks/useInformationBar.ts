export function useInformationBar() {
  const meetingInformation = {
    meetingName: "Formula 1 Grand Prix",
    sesstionName: "Qualifying - Q2",
    time: "14:30",
  };

  const weather = {
    airTemprature: 28,
    rainfall: false,
    trackTemprature: 35,
    windDirection: "NW",
    windSpeed: 12,
  };

  const laps = {
    currentLap: 27,
    totalLaps: 58,
  };

  return { meetingInformation, weather, laps };
}
