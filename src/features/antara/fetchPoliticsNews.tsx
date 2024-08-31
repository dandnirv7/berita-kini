import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const usePoliticsNews = () => {
  return useQuery({
    queryKey: ["politics"],
    queryFn: async () => {
      const response = await axiosInstance.get("/antara/politik");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
  });
};
