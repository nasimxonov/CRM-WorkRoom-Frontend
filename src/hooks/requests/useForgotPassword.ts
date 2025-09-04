import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useForgotPassword = () => {
  const { mutateAsync, isPending, isSuccess, isError, error, data } =
    useMutation({
      mutationKey: ["forgot-password"],
      mutationFn: async (data: { email: string }) => {
        return await api.post("/user/forgot-password", {
          email: data.email,
        });
      },
    });

  return { mutateAsync, isPending, isSuccess, isError, error, data };
};
