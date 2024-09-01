import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useEntertainmentNews = () => {
  return useQuery({
    queryKey: ["entertainment"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cnn/hiburan");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
