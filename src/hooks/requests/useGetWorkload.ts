import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useGetWorkload = () => {
  const { isSuccess, data, isFetching, isLoading } = useQuery({
    queryKey: ["workload-data"],
    queryFn: async () => {
      const response = await api.get("auth/workload");
      return response.data;
    },
  });

  return { Success: isSuccess, workloadData: data, fetching: isFetching, loading: isLoading };
};
