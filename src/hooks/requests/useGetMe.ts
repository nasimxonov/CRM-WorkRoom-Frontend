import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useGetMe = () => {
  const { isSuccess, data, isFetching, isLoading } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const response = await api.get("/auth/me");
      console.log(response);
      return response.data;
    },
  });

  return { isSuccess, data, isFetching, isLoading };
};


