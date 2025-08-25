import type { IMeeting } from "../types/Meeting.type";

export const fetchMeetings = async (year: string[], countryCode?: string): Promise<IMeeting[]> => {
  const url = `https://api.openf1.org/v1/meetings?year=${year[0]}${countryCode ? `&country_code=${countryCode}` : ''}`

  try {
    const res = await fetch(url)
    return res.json()
  } catch (_error) {
    throw new Error(`Failed to fetch schedules, ${_error}`);
  }
}
