import { useState } from "react";
import Input from "../ui/Input";

const Step4 = () => {
  const [countInput, setCountInput] = useState<number[]>([1]);
  const incrementInput = () => {
    setCountInput((prev) => {
      if (prev.length < 4) {
        const data = [...prev, prev.length + 1];
        return data;
      } else {
        return prev;
      }
    });
  };
  return (
    <div className="max-w-[403px]">
      <form className="flex w-full flex-col gap-y-8 mt-[33px] items-start">
        {countInput.map((option) => (
          <Input
            inputClassName="w-[403px]"
            type="email"
            label="Member's Email"
            placeholder="memberemail@gmail.com"
          />
        ))}
        <button
          onClick={incrementInput}
          type="button"
          className="mt-[25px] text-[16px] font-semibold text-[#3F8CFF]"
        >
          + Add another Member
        </button>
      </form>
    </div>
  );
};

export default Step4;
