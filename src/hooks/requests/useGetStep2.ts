import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";
import ENDPOINTS from "../../config/endpoints";

export const useGetProfileQuestions = (step_number: number) => {
  const url = ENDPOINTS.user.profileQuestions(step_number);
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["user-profile-questions"],
    queryFn: async () => {
      return await api.get(url);
    },
  });
  return {
    data,
    isError,
    isSuccess,
  };
};
