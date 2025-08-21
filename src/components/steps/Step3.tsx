import { useEffect, useState } from "react";
import Input from "../ui/Input";
import useGetStepInputs from "../../hooks/requests/useGetStep2";
import UniversalInput from "../ui/SelectInput";

interface Answer {
  question_id: string;
  answer_text?: string;
  option_id?: string;
}

const Step3 = ({ setNextStep, setThirdStepData }) => {
  const { isSuccess, data, isFetching } = useGetStepInputs(3);
  const questions = data?.data || [];

  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleInputChange = (qId: string, value: string) => {
    setAnswers((prev) => {
      const exists = prev.find((a) => a.question_id === qId);
      if (exists) {
        return prev.map((a) =>
          a.question_id === qId ? { ...a, answer_text: value } : a
        );
      }
      return [...prev, { question_id: qId, answer_text: value }];
    });
  };

  const handleSelectChange = (
    qId: string,
    value: string,
    optionId?: string
  ) => {
    setAnswers((prev) => {
      const exists = prev.find((a) => a.question_id === qId);
      if (exists) {
        return prev.map((a) =>
          a.question_id === qId
            ? { ...a, option_id: optionId }
            : a
        );
      }
      return [
        ...prev,
        { question_id: qId, option_id: optionId },
      ];
    });
  };

  const handleButtonSelect = (qId: string, optionId: string) => {
    setSelectedButton(optionId);
    setAnswers((prev) => {
      const exists = prev.find((a) => a.question_id === qId);
      if (exists) {
        return prev.map((a) =>
          a.question_id === qId ? { ...a, option_id: optionId } : a
        );
      }
      return [...prev, { question_id: qId, option_id: optionId }];
    });
  };

  useEffect(() => {
    setThirdStepData(answers);
    setNextStep(answers.length === questions.length);
  }, [answers, questions, setThirdStepData, setNextStep]);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-[403px]">
      <form className="flex w-full flex-col gap-y-[31px] mt-[33px]">
        {questions.map((q) => {
          switch (q.question_type) {
            case "text":
            case "email":
            case "password":
              return (
                <Input
                  key={q.id}
                  inputClassName="w-full"
                  type={q.question_type}
                  label={q.question_text}
                  placeholder={q.question_text}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(q.id, e.target.value)
                  }
                />
              );

            case "select":
              return (
                <UniversalInput
                  key={q.id}
                  id={q.id}
                  label={q.question_text}
                  type="select"
                  options={q.options}
                  onChange={(value, optionId) =>
                    handleSelectChange(q.id, value, optionId)
                  }
                />
              );

            case "button":
              return (
                <div key={q.id}>
                  <label className="label">{q.question_text}</label>
                  <div className="grid grid-cols-4 gap-4 mt-[7px]">
                    {q.options.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => handleButtonSelect(q.id, opt.id)}
                        className={`w-[89px] h-[48px] text-center text-[14px] font-normal rounded-[10px] ${
                          selectedButton === opt.id
                            ? "bg-[#3F8CFF] text-white"
                            : "bg-white text-[#7D8592] border border-[#D8E0F0]"
                        }`}
                      >
                        {opt.option_text}
                      </button>
                    ))}
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </form>
    </div>
  );
};

export default Step3;
