import { IMaskInput } from "react-imask";
import "../../assets/styles/input.css";
import Button from "./Button";
import type { RefObject } from "react";
import Loader from "./Loader";

interface InputMaskProps {
  label: string;
  inputRef: RefObject<HTMLInputElement>;
  handleClick: () => void;
  sendOtpSuccess: boolean;
  isLoading?: boolean;
}

const InputMask = ({
  label,
  sendOtpSuccess,
  inputRef,
  handleClick,
  isLoading,
}: InputMaskProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <label className="label">{label}</label>
        <div className="w-full gap-2 flex justify-between">
          <IMaskInput
            inputRef={inputRef}
            className="input w-full"
            mask="{+998} 00 000 00 00"
            unmask="+998000000000"
            defaultValue="+998"
            inputMode="tel"
            minLength={17}
          />
          <Button
            onClick={handleClick}
            itemType="button"
            disabled={sendOtpSuccess}
            className={`flex !py-[5px] ${
              sendOtpSuccess && `disabled`
            } items-center gap-x-3`}
            variant="small"
          >
            {isLoading ? <Loader /> : "Send"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default InputMask;
