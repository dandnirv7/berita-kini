import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useLifeStylesNews = () => {
  return useQuery({
    queryKey: ["lifeStyle"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cnn/gayaHidup");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
