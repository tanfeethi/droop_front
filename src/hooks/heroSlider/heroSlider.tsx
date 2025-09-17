import { useSuspenseQuery } from "@tanstack/react-query";
import apiClient from "../../utils/apiClient";

// Main slider object (no "details" in the response)
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
}

// API response structure
export interface ISlidersResponse {
  data: ISlider[];
  status: string;
  error: string;
  code: number;
}

// Fetch function
export const getHeroSliders = async (): Promise<ISlider[]> => {
  const res = await apiClient.get<ISlidersResponse>("/api/frontend/hero");
  return res.data.data; // return just the array
};

// React Query hook
export const useFetchHeroSlider = () => {
  return useSuspenseQuery<ISlider[]>({
    queryKey: ["heroSlider"],
    queryFn: getHeroSliders,
    staleTime: 5 * 60 * 1000, // fresh for 5 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
