import { Link, useSearchParams, useNavigate } from "react-router-dom";
import illustration from "../assets/icons/Illustration.svg";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { useResetPassword } from "../hooks/requests/useResetPassword";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const navigate = useNavigate();

  const { register, handleSubmit, formState, watch } =
    useForm<ResetPasswordForm>({
      defaultValues: { password: "", confirmPassword: "" },
    });
  const { errors } = formState;

  const { mutateAsync, isPending, isSuccess, isError, error } =
    useResetPassword();

  const onSubmit = async (values: ResetPasswordForm) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await mutateAsync({ token, newPassword: values.password });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password successfully reset");
      navigate("/sign-in");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }, [isError, error]);

  return (
    <section className="h-screen p-[20px_40px_30px_40px] bg-[#F4F9FD]">
      <div className="flex rounded-[24px] overflow-hidden h-full">
        {/* Left side */}
        <div className="bg-[#3F8CFF] w-[100%] max-w-[50%] pl-[84px]">
          <div className="flex flex-col h-full justify-around items-start">
            <div className="flex items-center mt-4 text-white gap-[30px]">
              <Icon.companyLogo />
              <h2 className="brand-title">Woorkroom</h2>
            </div>
            <p className="desc text-white text-[40px] max-w-[390px]">
              Your place to work Plan. Create. Control.
            </p>
            <img
              width={600}
              height={373}
              src={illustration}
              alt="illustration"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-[100%] max-w-[50%] bg-[white] shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex max-w-[403px] mx-auto flex-col items-center pt-[115px]">
            <h2 className="sign-in-title ">Reset Password</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-[31px] mt-[33px]"
            >
              <Input
                inputClassName="w-full"
                type="password"
                label="New Password"
                placeholder="Enter new password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <Input
                inputClassName="w-full"
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}

              <div className="flex flex-col items-center gap-5 mt-[20px]">
                <Button
                  itemType="submit"
                  variant="medium"
                  className="flex items-center gap-x-2"
                  disabled={isPending}
                >
                  {isPending ? "Resetting..." : "Reset Password"}
                </Button>

                <Link
                  to={"/sign-in"}
                  className="font-semibold text-[16px] text-[#3f8cff]"
                >
                  Back to Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
