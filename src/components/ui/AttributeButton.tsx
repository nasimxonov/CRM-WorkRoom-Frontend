import type { UseFormReturn } from "react-hook-form";
import { useState } from "react";
import type { IOptions } from "../steps/Step2";

interface Props {
  label: string;
  form: UseFormReturn<any>;
  options: IOptions[];
  name: string;
  question_id: string;
}

const AttributeButton = ({
  label,
  options,
  name,
  form,
  question_id,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="flex flex-col gap-y-4">
      <label className="label">{label}</label>
      <div className="gap-4 grid grid-cols-4">
        {options.map((option) => {
          return (
            <label
              onClick={() => setSelectedValue(option.id)}
              htmlFor={option.id}
              className={`w-[89px] h-[48px] flex items-center justify-center text-center text-[14px] font-normal ${
                selectedValue === option.id
                  ? "bg-[#3F8CFF] text-white"
                  : "bg-none text-[#7D8592]"
              } cursor-pointer font-normal border-[#D8E0F0] border rounded-[10px] shadow-[rgba(184_200_224_0.22)]`}
            >
              {option.option_text}
              <input
                type="radio"
                value={option.id}
                className="hidden"
                id={option.id}
                {...form.register(question_id)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default AttributeButton;
