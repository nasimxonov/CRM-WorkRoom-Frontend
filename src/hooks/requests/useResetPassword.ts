import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useResetPassword = () => {
  const { mutateAsync, isPending, isSuccess, isError, error, data } =
    useMutation({
      mutationKey: ["reset-password"],
      mutationFn: async (data: { token: string; newPassword: string }) => {
        return await api.post("/user/reset-password", {
          token: data.token,
          newPassword: data.newPassword,
        });
      },
    });

  return { mutateAsync, isPending, isSuccess, isError, error, data };
};
