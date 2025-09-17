import { useQuery } from "@tanstack/react-query";
import apiClient from "../../utils/apiClient";

// Detail item inside each program slider
export interface ISliderDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  order: number;
}

// Main slider object
export interface ISlider {
  id: number;
  type: string;
  order: number;
  background: string;
  title: string;
  text: string;
  btnTitle: string;
  btnUrl: string | null;
  btnActive: string | null;
  details: ISliderDetail[];
}

// API response
export interface ISlidersResponse {
  data: ISlider[];
  status: string;
  error: string;
  code: number;
}

// Fetch function
export const getSliders = async () => {
  const res = await apiClient.get<ISlidersResponse>("/api/frontend/program");
  return res.data.data; // return just the array
};

// React Query hook
export const useFetchProgSliders = () => {
  return useQuery({
    queryKey: ["programs"],
    queryFn: getSliders,
    staleTime: 5 * 60 * 1000, // Data will be considered fresh for 5 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
