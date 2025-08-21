import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";

const useGetStepInputs = (step_number: number) => {
  const { isSuccess, data, isFetching, isLoading } = useQuery({
    queryKey: ["admin-questions", step_number], 
    queryFn: async () => {
      return await api.get("admin/questions", {
        params: { step_number }, 
      });
    },
  });

  return { isSuccess, data, isFetching, isLoading };
};

export default useGetStepInputs;
