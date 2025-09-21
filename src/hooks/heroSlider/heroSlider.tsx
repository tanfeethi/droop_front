import { useSuspenseQuery } from "@tanstack/react-query";
import apiClient from "../../utils/apiClient";
import { useTranslation } from "react-i18next";

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

// Fetch function with language
export const getHeroSliders = async (lang: string): Promise<ISlider[]> => {
  const res = await apiClient.get<ISlidersResponse>(
    `/api/frontend/hero?lang=${lang}`
  );
  return res.data.data;
};

// React Query hook
export const useFetchHeroSlider = () => {
  const { i18n } = useTranslation();

  return useSuspenseQuery<ISlider[]>({
    queryKey: ["heroSlider", i18n.language], // 👈 language included
    queryFn: () => getHeroSliders(i18n.language),
    staleTime: 5 * 60 * 1000,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
