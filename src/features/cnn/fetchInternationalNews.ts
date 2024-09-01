import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useInternationalNews = () => {
  return useQuery({
    queryKey: ["international"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cnn/internasional");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
