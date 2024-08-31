import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useLatestNews = () => {
  return useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cnn/terbaru");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
