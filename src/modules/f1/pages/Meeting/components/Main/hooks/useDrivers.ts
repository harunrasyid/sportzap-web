import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IDriverResponse } from "../types/driver.type";

export function useDrivers(session: number) {
  // Fetch from API
  const params = new URLSearchParams({
    session_key: session.toString(),
  });

  const { data: drivers, isLoading } = useQuery<IDriverResponse[]>({
    queryKey: ["drivers"],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openf1.org/v1/drivers?${params}`
      );
      return res.data;
    },
  });

  const driverList: number[] =
    drivers?.map((driver) => driver.driver_number) ?? [];

  return {
    drivers,
    driverList,
    isLoading,
  };
}
