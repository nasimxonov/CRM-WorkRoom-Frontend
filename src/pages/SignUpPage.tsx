import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import ProgressStep from "../components/ui/progress-step";

const SignUpPage = () => {
  const [previusSteps, setPreviusStep] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSavePreviusSteps = () => {
    setPreviusStep((previusSteps) => {
      const data = [...previusSteps, currentStep - 1];
      return data;
    });
  };
  const incrementCurrentStep = () => {
    if (currentStep <= 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviusSteps();
    }
  }, [currentStep]);
  return (
    <section className="h-screen p-[20px_40px_30px_40px] bg-[#F4F9FD]">
      <div className="flex h-full gap-x-8">
        <div className="bg-[#3F8CFF] w-[100%] rounded-[24px] max-w-[25%] pt-[60px] pl-[40px]">
          <div className="flex flex-col gap-y-14 h-full items-start">
            <div className="mt-4 text-white gap-[30px]">
              <Icon.companyLogo />
            </div>
            <p className="desc text-white text-[40px] max-w-[390px]">
              Get Started
            </p>
            <ProgressStep
              previusSteps={previusSteps}
              currentStep={currentStep}
              steps={4}
              previusStepSuccess={true}
            />
          </div>
        </div>

        <div className="w-[100%] max-w-[75%] rounded-[24px]  bg-[white] shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex max-w-[403px] mx-auto flex-col items-center pt-[115px]">
            <button onClick={() => incrementCurrentStep()}>
              Increment progress
            </button>
            <h2 className="sign-in-title ">Sign In to Woorkroom</h2>
            <form className="w-full flex flex-col gap-[31px] mt-[33px]">
              <Input
                inputClassName="w-full"
                type="email"
                label="Email Address"
                placeholder="youremail@gmail.com"
              />
              <Input
                inputClassName="w-full"
                label="Password"
                type={"password"}
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

export default SignUpPage;
