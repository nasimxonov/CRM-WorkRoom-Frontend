import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useRegister = () => {
  const { mutateAsync, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: any) => {
      return await api.post("/auth/register",  data );
    },
  });
  return { mutateAsync, isPending, isSuccess, isError, error };
};
