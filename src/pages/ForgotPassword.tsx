import { Link } from "react-router-dom";
import illustration from "../assets/icons/Illustration.svg";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { useForgotPassword } from "../hooks/requests/useForgotPassword";
import { toast } from "react-toastify";
import { useEffect } from "react";

interface ForgotPasswordForm {
  email: string;
}

const ForgotPassword = () => {
  const { register, handleSubmit, formState } = useForm<ForgotPasswordForm>({
    defaultValues: { email: "" },
  });
  const { errors } = formState;

  const { mutateAsync, isPending, isSuccess, isError, error } =
    useForgotPassword();

  const onSubmit = async (values: ForgotPasswordForm) => {
    try {
      await mutateAsync(values);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Link successfully sended your email`);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }, [isError, error]);

  return (
    // <section className="h-screen p-[20px_40px_30px_40px] bg-[#F4F9FD]">
    //   <div className="flex rounded-[24px] overflow-hidden h-full">
    //     <div className="bg-[#3F8CFF] w-[100%] max-w-[50%] pl-[84px]">
    //       <div className="flex flex-col h-full justify-around items-start">
    //         <div className="flex items-center mt-4 text-white gap-[30px]">
    //           <Icon.companyLogo />
    //           <h2 className="brand-title">Woorkroom</h2>
    //         </div>
    //         <p className="desc text-white text-[40px] max-w-[390px]">
    //           Your place to work Plan. Create. Control.
    //         </p>
    //         <img
    //           width={600}
    //           height={373}
    //           src={illustration}
    //           alt="illustration"
    //         />
    //       </div>
    //     </div>

    //     <div className="w-[100%] max-w-[50%] bg-[white] shadow-[0px_6px_rgba(196_203_214_0.5)]">
    //       <div className="flex max-w-[403px] mx-auto flex-col items-center pt-[115px]">
    //         <h2 className="sign-in-title ">Sign In to Woorkroom</h2>
    //         <form className="w-full flex flex-col gap-[31px] mt-[33px]">
    //           <Input
    //             inputClassName="w-full"
    //             type="email"
    //             label="Email Address"
    //             placeholder="youremail@gmail.com"
    //           />
    //           <Input
    //             inputClassName="w-full"
    //             label="Password"
    //             type={"password"}
    //             placeholder="******"
    //             eyeIcon={true}
    //           />
    //           <div className="flex items-center justify-between mt-[20px]">
    //             <div className="flex gap-[14px] items-center">
    //               <input id="save-me" type="checkbox" />
    //               <label
    //                 htmlFor="save-me"
    //                 className="text-[16px] text-[rgba(125_133_146)] font-medium cursor-pointer"
    //               >
    //                 Remember me
    //               </label>
    //             </div>
    //             <span className="text-[16px] text-[rgba(125_133_146)] font-medium cursor-pointer">
    //               Forgot Password?
    //             </span>
    //           </div>
    //           <div className="flex flex-col items-center gap-5 mt-[20px]">
    //             <Button
    //               itemType="submit"
    //               variant="medium"
    //               className="flex items-center gap-x-2"
    //             >
    //               Send Link
    //             </Button>
    //             <Link
    //               to={"/sign-up"}
    //               className="font-semibold text-[16px] text-[#3f8cff]"
    //             >
    //               Don't have an account?
    //             </Link>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="h-screen p-[20px_40px_30px_40px] bg-[#F4F9FD]">
      <div className="flex rounded-[24px] overflow-hidden h-full">
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

        <div className="w-[100%] max-w-[50%] bg-[white] shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex max-w-[403px] mx-auto flex-col items-center pt-[115px]">
            <h2 className="sign-in-title ">Forgot Password</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-[31px] mt-[33px]"
            >
              <Input
                inputClassName="w-full"
                type="email"
                label="Email Address"
                placeholder="youremail@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {isSuccess && (
                <p className="text-green-500 text-sm">
                  Reset link sent to your email.
                </p>
              )}
              {isError && (
                <p className="text-red-500 text-sm">
                  {error instanceof Error
                    ? error.message
                    : "Something went wrong"}
                </p>
              )}

              <div className="flex flex-col items-center gap-5 mt-[20px]">
                <Button
                  itemType="submit"
                  variant="medium"
                  className="flex items-center gap-x-2"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send Link"}
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

export default ForgotPassword;
