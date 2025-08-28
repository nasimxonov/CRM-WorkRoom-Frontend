import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import useGetStepInputs from "../../hooks/requests/useGetStep2";
import "../../assets/styles/button.css";
import "../../assets/styles/input.css";
import "../../assets/styles/sign-in.css";
import UniversalInput from "../ui/SelectInput";
import type { UseFormReturn } from "react-hook-form";
import AttributeLayout from "../AttributeLayout";

export interface IOptions {
  id: string;
  option_text: string;
  option_value: string;
}

export interface IQuestions {
  id: string;
  question_text: string;
  question_type: string;
  is_required: boolean;
  options?: IOptions[];
}

interface Props {
  setNextStep: Dispatch<SetStateAction<boolean>>;
  form: UseFormReturn<any>;
}

type Answer =
  | { question_id: string; answer_text: string }
  | { question_id: string; option_id: string };

const Step2 = ({ form, setNextStep }: Props) => {
  // const { isSuccess, data, isFetching } = useGetStepInputs(2);
  // const [answers, setAnswers] = useState<Answer[]>([]);

  // const handleChange = (
  //   questionId: string,
  //   type: "text" | "select" | "radio",
  //   value: string,
  //   optionId?: string
  // ) => {
  //   setAnswers((prev) => {
  //     const existing = prev.find((a) => a.question_id === questionId);

  //     const newAnswer =
  //       type === "text"
  //         ? { question_id: questionId, answer_text: value }
  //         : { question_id: questionId, option_id: optionId! };

  //     if (existing) {
  //       return prev.map((a) =>
  //         a.question_id === questionId ? newAnswer : a
  //       );
  //     }
  //     return [...prev, newAnswer];
  //   });
  // };

  // useEffect(() => {
  //   if (isSuccess && data?.data) {
  //     const allAnswered =
  //       answers.length === data.data.length &&
  //       answers.every(
  //         (a) =>
  //           ("answer_text" in a && a.answer_text.trim() !== "") ||
  //           ("option_id" in a && a.option_id.trim() !== "")
  //       );

  //     setNextStep(allAnswered);
  //     setSecondStepData(answers);
  //   }
  // }, [answers, isSuccess, data, setNextStep, setSecondStepData]);

  // if (isFetching) return <p>Loading Step 2 questions...</p>;
  // if (!isSuccess || !data?.data) return <p>Failed to load questions</p>;

  // return (
  //   <div className="max-w-[403px] w-full">
  //     <form className="flex flex-col gap-y-[31px] mt-[33px]">
  //       {data.data.map((q: any) => (
  //         <UniversalInput
  //           key={q.id}
  //           id={q.id}
  //           label={q.question_text}
  //           type={q.question_type}
  //           value={
  //             "answer_text" in
  //             (answers.find((a) => a.question_id === q.id) || {})
  //               ? (answers.find((a) => a.question_id === q.id) as any)
  //                   ?.answer_text
  //               : ""
  //           }
  //           selectedOptionId={
  //             "option_id" in
  //             (answers.find((a) => a.question_id === q.id) || {})
  //               ? (answers.find((a) => a.question_id === q.id) as any)
  //                   ?.option_id
  //               : ""
  //           }
  //           onChange={(val, optionId) =>
  //             handleChange(q.id, q.question_type, val, optionId)
  //           }
  //           options={q.options || []}
  //         />
  //       ))}
  //     </form>
  //   </div>
  // );

  const { data, isError, isSuccess } = useGetStepInputs(2);
  const questions: IQuestions[] = data?.data;
  useEffect(() => {
    setNextStep(true);
  }, []);
  return (
    <div className="flex flex-col gap-y-6">
      {questions &&
        questions.length >= 1 &&
        questions.map((question) => (
          <AttributeLayout
            form={form}
            key={question.id}
            is_required={question.is_required}
            question_id={question.id}
            question_text={question.question_text}
            type={question.question_type}
            options={question.options}
          />
        ))}
    </div>
  );
};

export default Step2;
