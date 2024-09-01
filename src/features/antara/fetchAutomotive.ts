import { axiosInstance } from "@/lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useAutomotiveNews = () => {
  return useQuery({
    queryKey: ["automotive"],
    queryFn: async () => {
      const response = await axiosInstance.get("/antara/otomotif");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
