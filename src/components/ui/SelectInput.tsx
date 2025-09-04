// import { useEffect, useState } from "react";
// import "../../assets/styles/input.css";
// import Icon from "./Icon";

// interface UniversalInputProps {
//   id: string;
//   label: string;
//   type: "text" | "select" | "radio";
//   value?: string;
//   selectedOptionId?: string;
//   onChange?: (value: string, optionId?: string) => void;
//   options?: { option_text: string; option_value: string; id: string }[];
// }

// const UniversalInput = ({
//   id,
//   label,
//   type,
//   value = "",
//   selectedOptionId = "",
//   onChange,
//   options = [],
// }: UniversalInputProps) => {
//   const [inputValue, setInputValue] = useState(value);
//   const [selectedId, setSelectedId] = useState(selectedOptionId);

//   useEffect(() => {
//     setInputValue(value);
//     setSelectedId(selectedOptionId);
//   }, [value, selectedOptionId]);

//   const handleChange = (val: string, optionId?: string) => {
//     if (type === "text") {
//       setInputValue(val);
//       onChange?.(val);
//     } else {
//       setSelectedId(optionId || "");
//       onChange?.(val, optionId);
//     }
//   };

//   return (
//     <div
//       className={
//         type === "radio"
//           ? "w-full flex items-center justify-between"
//           : "w-full flex flex-col gap-y-2"
//       }
//     >
//       <label htmlFor={id} className="label">
//         {label}
//       </label>

//       {type === "text" && (
//         <input
//           id={id}
//           type="text"
//           value={inputValue}
//           onChange={(e) => handleChange(e.target.value)}
//           className="border rounded-md px-3 py-2 outline-none focus:ring focus:ring-blue-400"
//         />
//       )}

//       {type === "select" && (
//         <div className="select-wrapper">
//           <select
//             id={id}
//             value={selectedId}
//             onChange={(e) =>
//               handleChange(
//                 e.target.value,
//                 options.find((o) => o.option_value === e.target.value)?.id
//               )
//             }
//             className="select-input w-[403px]"
//           >
//             <option value="" disabled>
//               Select...
//             </option>
//             {options.map((option) => (
//               <option key={option.id} value={option.option_value}>
//                 {option.option_text}
//               </option>
//             ))}
//           </select>
//           <span className="select-icon">
//             <Icon.bottomArrowIcon />
//           </span>
//         </div>
//       )}

//       {type === "radio" && (
//         <div className="flex items-center gap-3">
//           {options.map((option) => (
//             <label
//               key={option.id}
//               className="flex items-center gap-2 cursor-pointer"
//             >
//               <input
//                 type="radio"
//                 id={`${id}-${option.id}`}
//                 name={id}
//                 value={option.option_value}
//                 checked={selectedId === option.id}
//                 onChange={() => handleChange(option.option_value, option.id)}
//               />
//               {option.option_text}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UniversalInput;

import ReactSelect from "react-select";
import { Controller, type UseFormReturn } from "react-hook-form";
import type { IOptions } from "../steps/Step2";

interface Props {
  question_text: string;
  options: IOptions[];
  is_required: boolean;
  name: string;
  form: UseFormReturn<any>;
  question_id: string;
}

const Select = ({
  question_id,
  question_text,
  options,
  is_required,
  form,
  name,
}: Props) => {
  const optionsData = options?.map((option) => {
    return {
      value: option.id,
      label: option.option_text,
    };
  });
  return (
    <div className="flex flex-col gap-y-2">
      <label className="font-semibold text-[#7D8592]">{question_text}</label>
      <Controller
        name={question_id}
        control={form.control}
        render={(props) => {
          return (
            <ReactSelect
              options={optionsData}
              onChange={({ value }) => props.field.onChange(value)}
              value={props.field.value}
              required={is_required}
              styles={{
                indicatorSeparator: (base) => {
                  return {
                    listStyle: "none",
                  };
                },
                control(base, props) {
                  return {
                    color: "red",
                    border: "1px solid #D8E0F0",
                    borderRadius: "14px",
                    display: "flex",
                    padding: "6px 12px",
                  };
                },
                placeholder(base, props) {
                  return {
                    ...base,
                    color: "#7D8592",
                  };
                },
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default Select;
