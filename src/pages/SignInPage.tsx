import Icon from "../components/ui/Icon";
import "../assets/styles/sign-in.css";
import illustration from "../assets/icons/Illustration.svg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const SignInPage = () => {
  return (
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
            <h2 className="sign-in-title ">Sign In to Woorkroom</h2>
            <form className="w-full flex flex-col gap-[31px] mt-[33px]">
              <Input
                inputClassName="w-full"
                label="Email Address"
                placeholder="youremail@gmail.com"
              />
              <Input
                inputClassName="w-full"
                label="Password"
                placeholder="******"
                eyeIcon={true}
              />
              <div className="flex items-center justify-between mt-[20px]">
                <div className="flex gap-[14px] items-center">
                  <input id="save-me" type="checkbox" />
                  <label
                    htmlFor="save-me"
                    className="text-[16px] text-[rgba(125_133_146)] font-medium cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <span className="text-[16px] text-[rgba(125_133_146)] font-medium cursor-pointer">
                  Forgot Password?
                </span>
              </div>
              <div className="flex flex-col items-center gap-5 mt-[20px]">
                <Button variant="medium" className="flex items-center gap-2">
                  Sign In <Icon.rightArrowIcon />
                </Button>
                <span className="font-semibold text-[16px] text-[#3f8cff]">
                  Don't have an account?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
