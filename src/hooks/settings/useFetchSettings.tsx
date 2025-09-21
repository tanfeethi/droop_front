import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import apiClient from "../../utils/apiClient";

interface SocialMedia {
  x?: string;
  tiktok?: string;
  instagram?: string;
  facebook?: string;
}

interface SettingsData {
  id: number;
  title?: string;
  address?: string;
  phones: string[];
  social_media: SocialMedia;
  long: string;
  lat: string;
  email: string;
}

const fetchSettings = async (): Promise<SettingsData> => {
  const response = await apiClient.get("/api/frontend/settings/list");
  return response.data.data;
};

export const useFetchSettings = () => {
  const { i18n } = useTranslation();
  return useQuery<SettingsData, Error>({
    queryKey: ["settings", i18n.language],
    queryFn: fetchSettings,
  });
};
