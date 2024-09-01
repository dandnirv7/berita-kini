import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useSportsNews = () => {
  return useQuery({
    queryKey: ["sports"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cnn/olahraga");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
