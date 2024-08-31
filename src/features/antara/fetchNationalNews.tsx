import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useNationalNews = () => {
  return useQuery({
    queryKey: ["national"],
    queryFn: async () => {
      const response = await axiosInstance.get("/tempo/nasional");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
