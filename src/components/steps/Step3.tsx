import { useState } from "react";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";

const options = [
  "Only me",
  "2 - 5",
  "6 - 10",
  "11 - 20",
  "21 - 40",
  "41 - 50",
  "51 - 100",
  "101 - 500",
];

const Step3 = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className="max-w-[403px]">
      <form className="flex w-full flex-col gap-y-[31px] mt-[33px]">
        <Input
          inputClassName="w-full"
          type="text"
          label="Your Company's Name"
          placeholder="Company's Name"
        />
        <SelectInput
          label="Business Direction"
          options={[
            { value: "IT and programming", label: "IT and programming" },
            {
              value: "Technology & Innovation",
              label: "Technology & Innovation",
            },
            { value: "E-commerce & Retail", label: "E-commerce & Retail" },
            { value: "Education & Training", label: "Education & Training" },
          ]}
        />
        <div className="">
          <label className="label">How many people in your team?</label>
          <div className="grid grid-cols-4 gap-4 mt-[7px]">
            {options.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-[89px] h-[48px] text-center text-[14px] font-normal rounded-[10px] border border-[#D8E0F0]
              ${
                selectedOption === option
                  ? "bg-[#3F8CFF] text-white border-none"
                  : "bg-white text-[#7D8592] border border-[#D8E0F0]"
              }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step3;
