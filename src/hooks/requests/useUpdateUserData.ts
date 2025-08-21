import { useMutation } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useUpdateUserData = () => {
  const { mutateAsync, isPending, isSuccess, isError, error, data } =
    useMutation({
      mutationKey: ["login"],
      mutationFn: async (data: {
        email: string;
        position: string;
        level: string;
        company: string;
        phone_number: string;
      }) => {
        return await api.put("/auth/update", {
          email: data.email,
          position: data.position,
          level: data.level,
          company: data.company,
          phone_number: data.phone_number,
        });
      },
    });
  return { mutateAsync, isPending, isSuccess, isError, error, updateData: data };
};
