import { useQuery } from "@tanstack/react-query";
import type { ILocationResponse } from "../types/location.types";
import axios from "axios";
import { isEmptyList } from "@/shared/utils";

export function useLocation(session: number, driverList: number[]) {
  const drivers = ["1"];

  // Fetch from API
  const params = new URLSearchParams({
    session_key: session.toString(),
    "date>": "2025-05-25T13:00:00+00:00",
    "date<": "2025-05-25T15:00:00+00:00",
  });

  drivers.forEach((driver) =>
    params.append("driver_number", driver.toString())
  );

  const { data, isLoading } = useQuery<ILocationResponse[]>({
    queryKey: ["location"],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openf1.org/v1/location?${params}`
      );
      return res.data;
    },
    enabled: !isEmptyList(driverList),
  });

  return {
    data,
    isLoading,
  };
}
