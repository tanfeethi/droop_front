import { useQuery } from "@tanstack/react-query";
import apiClient from "../../utils/apiClient";

// Interface for each static page item
export interface IStaticPage {
  name: string;
  title: string; // now plain string
  text: string; // now plain string
  image: string;
}

// Full API response
export interface IStaticPagesResponse {
  data: IStaticPage[];
  status: string;
  error: string;
  code: number;
}

// Fetch function
export const getStaticPages = async (): Promise<IStaticPage[]> => {
  const res = await apiClient.get<IStaticPagesResponse>(
    "/api/frontend/staticPages"
  );
  return res.data.data;
};

// React Query hook
export const useFetchStaticPages = () => {
  return useQuery<IStaticPage[]>({
    queryKey: ["static-pages"],
    queryFn: getStaticPages,
    staleTime: 5 * 60 * 1000, // Data will be considered fresh for 5 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
