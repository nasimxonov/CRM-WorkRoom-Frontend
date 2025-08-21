import { useEffect, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Step4 from "../components/steps/Step4";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import ProgressStep from "../components/ui/progress-step";
import useStepProgressAuth from "../hooks/useStepProgressAuth";
import { useRegister } from "../hooks/requests/useRegister";

type Answer =
  | { type: "option"; question_id: string; option_id: string }
  | { type: "text"; question_id: string; answer_text: string };

type Emails = [
  {
    email: string;
  }
];

const SignUpPage = () => {
  const navigate = useNavigate();
  const totalStep = 4;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setVerifiedPhoneNumber] = useState();
  const [secondStepData, setSecondStepData] = useState<Answer[]>(null);
  const [thirdStepData, setThirdStepData] = useState<Answer[]>(null);
  const [fourthStepData, setFourthStepData] = useState<Emails[]>(null);

  const { error, isError, isPending, isSuccess, mutateAsync } = useRegister();
  const register = async () => {
    const registerData = {
      email,
      password,
      phone,
      secondStepData,
      thirdStepData,
      fourthStepData,
    };
    try {
      await mutateAsync(registerData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/successfull");
    }
  }, [isSuccess, navigate]);
  const [currentStep, setCurrentStep] = useState(1);
  const [nextStep, setNextStep] = useState<boolean>(false);
  const { progressData, setProgressData } = useStepProgressAuth();
  const handleSavePreviusStep = () => {
    const findStep = progressData.find((step) => step.step === currentStep - 1);
    findStep.isSuccess = true;
    setProgressData([...progressData]);
  };
  const incrementCurrentStep = () => {
    if (currentStep < totalStep) {
      setCurrentStep((prevState) => prevState + 1);
    }
  };
  const decrementCurrentStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevState) => prevState - 1);
    }
  };
  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviusStep();
    }
  }, [currentStep]);
  const getCurrentStep = () => {
    switch (currentStep) {
      case 1: {
        return (
          <Step1
            setNextstep={setNextStep}
            setEmail={setEmail}
            setPassword={setPassword}
            setVerifiedPhoneNumber={setVerifiedPhoneNumber}
          />
        );
      }
      case 2: {
        return (
          <Step2
            setSecondStepData={setSecondStepData}
            setNextStep={setNextStep}
          />
        );
      }
      case 3: {
        return (
          <Step3
            setNextStep={setNextStep}
            setThirdStepData={setThirdStepData}
          />
        );
      }
      case 4: {
        return (
          <Step4
            setFourthStepData={setFourthStepData}
            setNextStep={setNextStep}
          />
        );
      }
    }
  };

  return (
    <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="flex h-full gap-x-8">
        <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
          <div className="flex flex-col gap-y-14 h-full items-start">
            <div className="mt-4 text-white gap-x-8">
              <Icon.companyLogo />
            </div>
            <p className="description text-white text-[40px] max-w-[400px]">
              Get started
            </p>
            <ProgressStep steps={progressData} currentStep={currentStep} />
          </div>
        </div>
        <div className="w-[100%] flex flex-col justify-between max-w-[70%] rounded-[24px]  bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col max-w-[403px] w-full mx-auto items-center pt-[55px]">
            <span className="font-bold text-[14px] text-[#3F8CFF]">
              Step {currentStep}/{totalStep}
            </span>
            <h2 className="signin-title">
              {progressData[currentStep - 1].title}
            </h2>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full flex-col gap-y-[15px] mt-[33px]"
            >
              {getCurrentStep()}
            </form>
          </div>
          {/* <div className="border-t-2 border-[#E4E6E8] pt-[10px] pb-[10px] flex items-center">
            {currentStep > 1 && (
              <button
                onClick={decrementCurrentStep}
                className="flex items-center gap-[5px] border-none text-[#3F8CFF] ml-[56px]"
              >
                <Icon.previusIcon />
                Previous
              </button>
            )}
            <Button
              variant="small"
              disabled={!nextStep}
              onClick={incrementCurrentStep}
              className={`flex ml-auto mr-10 items-center gap-x-3 ${
                !nextStep ? "disabled" : ""
              }`}
            >
              Next Step
              <Icon.rightArrowIcon />
            </Button>
            <Link
              to={"/successfull"}
              className="link flex gap-x-3 items-center ml-auto mr-10"
            >
              Next Step <Icon.rightArrowIcon />
            </Link>
          </div> */}
          <div className="border-t-2 border-[#E4E6E8] pt-[10px] pb-[10px] flex items-center">
            {currentStep > 1 && (
              <button
                onClick={decrementCurrentStep}
                className="flex items-center gap-[5px] border-none text-[#3F8CFF] ml-[56px]"
              >
                <Icon.previusIcon />
                Previous
              </button>
            )}
            {currentStep < totalStep ? (
              <Button
                variant="small"
                disabled={!nextStep}
                onClick={incrementCurrentStep}
                className={`flex ml-auto mr-10 items-center gap-x-3 ${
                  !nextStep ? "disabled" : ""
                }`}
              >
                Next Step
                <Icon.rightArrowIcon />
              </Button>
            ) : (
              <Button
                variant="small"
                disabled={!nextStep || isPending}
                onClick={register}
                className={`flex ml-auto mr-10 items-center gap-x-3 ${
                  !nextStep ? "disabled" : ""
                }`}
              >
                {isPending ? "Loading..." : "Finish & Register"}
                <Icon.rightArrowIcon />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
