import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type RefObject,
} from "react";
import Input from "../ui/Input";
import type { UseFormReturn } from "react-hook-form";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

interface Props {
  form: UseFormReturn<any>;
  formRef: RefObject<HTMLFormElement>;
  setNextStep: any;
}

const Step4 = ({ setNextStep, form, formRef }: Props) => {
  const [countInput, setCountInput] = useState([1]);

  const onAddCount = () => {
    const isValid = formRef.current.checkValidity();
    if (!isValid) return formRef.current.reportValidity();
    if (countInput.length < 4) {
      setCountInput((previus) => [...previus, 1]);
    }
  };

  return (
    <div className="max-w-[403px]">
      {countInput.map((e, index) => {
        return (
          <Input
            label="Member's Email"
            type="email"
            placeholder="memberemail@gmail.com"
            required={true}
            {...form.register(`members-${index}`)}
            inputClassName="w-full"
          />
        );
      })}
      <Button
        type="button"
        variant="small"
        onClick={onAddCount}
        className="!flex !bg-transparent !shadow-none !cursor-pointer !text-[#3F8CFF] !w-[250px] !items-center !justify-start !pl-0 !gap-2 !h-[24px] "
      >
       + Add another Member
      </Button>

      {/* <form
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
      </form> */}
    </div>
  );
};

export default Step4;
