import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useTechnologyNews = () => {
  return useQuery({
    queryKey: ["technology"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cnn/teknologi");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
