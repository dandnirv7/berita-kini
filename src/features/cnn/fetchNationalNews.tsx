import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useNationalNews = () => {
  return useQuery({
    queryKey: ["national"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cnn/nasional");
      return response.data?.data;
    },
    refetchOnWindowFocus: false,
  });
};
