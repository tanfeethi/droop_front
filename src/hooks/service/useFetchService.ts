import { useQuery } from "@tanstack/react-query";
import apiClient from "../../utils/apiClient";

// Service item
export interface IService {
  id: number;
  title: string;
  text: string;
  icon: string;
}

// API response
export interface IServicesResponse {
  data: IService[];
  status: string;
  error: string;
  code: number;
}

// Fetch function
export const getServices = async () => {
  const res = await apiClient.get<IServicesResponse>("/api/frontend/services");
  return res.data.data; // return just the array of services
};

// React Query hook
export const useFetchServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    staleTime: 5 * 60 * 1000, // Data will be considered fresh for 5 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
