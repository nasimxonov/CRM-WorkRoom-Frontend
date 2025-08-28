import React, {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import "../../assets/styles/input.css";
import CodeTimer from "../CodeTimer";
import Input from "../ui/Input";
import InputMask from "../ui/InputMask";
import Otpinput from "../ui/OtpInput";
import useSendOtp from "../../hooks/requests/useSendOtp";
import { toast } from "react-toastify";
import type { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any>;
  setVerifiedPhoneNumber: any;
  setNextStep: Dispatch<SetStateAction<boolean>>;
}

const Step1 = ({ setNextStep, form, setVerifiedPhoneNumber }: Props) => {
  // const [canSendOtp, setCanSendOtp] = useState<boolean>(true);
  // const [otpVerified, setOtpVerified] = useState(false);
  // const [email, setInpuEmail] = useState("");
  // const [password, setInputPassword] = useState("");

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const passwordRegex = /^.{8,}$/;

  // useEffect(() => {
  //   setEmail(email)
  //   setPassword(password)

  //   const emailValid = emailRegex.test(email);
  //   const passwordValid = passwordRegex.test(password);

  //   if (emailValid && passwordValid && otpVerified) {
  //     setNextstep(true);
  //   } else {
  //     setNextstep(false);
  //   }
  // }, [email, password]);

  // const {
  //   mutateAsync,
  //   isSuccess: sendOtpSuccess,
  //   isError,
  //   error,
  //   isPending,
  // } = useSendOtp();

  // const ref = useRef<HTMLInputElement>(null);
  // const [phoneNumber, setPhoneNumber] = useState<string>("+998950086735");

  // const handleClick = () => {
  //   const phoneNumber = ref.current?.value;
  //   setPhoneNumber(phoneNumber);
  //   mutateAsync(phoneNumber);
  // };

  // useEffect(() => {
  //   if (sendOtpSuccess) {
  //     toast.success(`Sms code sended`);
  //     setCanSendOtp(false);
  //   }
  // }, [sendOtpSuccess]);

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(error["response"].data.message);
  //   }
  // }, [isError]);

  const [canSendOtp, setCanSendOtp] = useState<boolean>(true);
  const {
    mutateAsync,
    isSuccess: sendOtpSuccess,
    isError,
    error,
    isPending,
  } = useSendOtp();
  const ref = useRef<HTMLInputElement>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("+998950086735");
  const handleClick = () => {
    const phoneNumber = ref.current?.value;
    setPhoneNumber(phoneNumber);
    mutateAsync(phoneNumber);
  };
  useEffect(() => {
    if (sendOtpSuccess) {
      toast.success(`Sms code sended`);
      setCanSendOtp(false);
    }
  }, [sendOtpSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(error["response"].data.message);
    }
  }, [isError]);

  return (
    <>
      <InputMask
        handleClick={handleClick}
        isLoading={isPending}
        sendOtpSuccess={!canSendOtp}
        inputRef={ref}
        label="Mobile Number"
      />
      {!canSendOtp && (
        <Otpinput
          setCanSendOtp={setCanSendOtp}
          setNextStep={setNextStep}
          setVerifiedPhoneNumber={setVerifiedPhoneNumber}
          phone_number={phoneNumber}
          label="Code from SMS"
        />
      )}
      {!canSendOtp && (
        <CodeTimer
          setCanSendOtp={setCanSendOtp}
          phone_number={phoneNumber}
          time={59}
        />
      )}
      <Input
        inputClassName="w-full"
        type="email"
        required={true}
        label="Email Address"
        placeholder="youremail@gmail.com"
        {...form.register("email")}
      />
      <Input
        required={true}
        inputClassName="w-full"
        label="Create Password"
        type={"password"}
        placeholder="••••••••"
        eyeIcon={true}
        {...form.register("password")}
      />
    </>
  );
};

export default Step1;
