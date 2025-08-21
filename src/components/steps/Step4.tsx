import React, { useEffect, useState, type ChangeEvent } from "react";
import Input from "../ui/Input";


const Step4 = ({ setNextStep, setFourthStepData }) => {
  const [emails, setEmails] = useState<string[]>([""]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    setFourthStepData({ emails });

    const allValid =
      emails.length > 0 &&
      emails.every((m) => m.trim() !== "" && emailRegex.test(m));
    setNextStep(allValid);
  }, [emails, setFourthStepData, setNextStep]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newEmails = [...emails];
    newEmails[index] = e.target.value;
    setEmails(newEmails);
  };

  const addInput = () => {
    if (emails.length < 5) {
      setEmails((prev) => [...prev, ""]);
    }
  };

  return (
    <div className="max-w-[403px]">
      <form
        className="flex w-full flex-col gap-y-8 mt-[33px] items-start"
        onSubmit={(e) => e.preventDefault()}
      >
        {emails.map((email, idx) => (
          <Input
            key={idx}
            inputClassName="w-[403px]"
            type="email"
            label={`Member's Email${emails.length > 1 ? ` ${idx + 1}` : ""}`}
            placeholder="memberemail@gmail.com"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(idx, e)
            }
            required
          />
        ))}

        {emails.length < 5 && (
          <button
            type="button"
            onClick={addInput}
            className="mt-[25px] text-[16px] font-semibold text-[#3F8CFF]"
          >
            + Add another Member
          </button>
        )}
      </form>
    </div>
  );
};

export default Step4;
