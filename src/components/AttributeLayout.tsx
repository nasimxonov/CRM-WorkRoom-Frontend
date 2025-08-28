import type { UseFormReturn } from "react-hook-form";
import Select from "./ui/SelectInput";
import type { IOptions } from "./steps/Step2";
import AttributeRadio from "./ui/AttributeRadio";
import AttributeButton from "./ui/AttributeButton";
import Input from "./ui/Input";

interface Props {
  type: string;
  options?: IOptions[];
  question_text: string;
  question_id: string;
  is_required: boolean;
  form: UseFormReturn<any>;
}

const AttributeLayout = ({
  options,
  question_text,
  is_required,
  form,
  type,
  question_id,
}: Props) => {
  return (
    <>
      {type === "select" && (
        <Select
          form={form}
          name={question_text}
          is_required={is_required}
          options={options}
          question_text={question_text}
        />
      )}
      {type === "radio" && (
        <AttributeRadio
          form={form}
          name={question_text}
          options={options}
          question_text={question_text}
        />
      )}
      {type === "text" && (
        <Input
          label={question_text}
          inputClassName="w-full"
          required={is_required}
          type="text"
          {...form.register(question_text)}
        />
      )}
      {type === "button" && (
        <AttributeButton
          form={form}
          name={question_text}
          options={options}
          label={question_text}
        />
      )}
    </>
  );
};

export default AttributeLayout;
