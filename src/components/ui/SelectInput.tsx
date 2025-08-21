import { useEffect, useState } from "react";
import "../../assets/styles/input.css";
import Icon from "./Icon";

interface UniversalInputProps {
  id: string;
  label: string;
  type: "text" | "select" | "radio";
  value?: string;
  selectedOptionId?: string;
  onChange?: (value: string, optionId?: string) => void;
  options?: { option_text: string; option_value: string; id: string }[];
}

const UniversalInput = ({
  id,
  label,
  type,
  value = "",
  selectedOptionId = "",
  onChange,
  options = [],
}: UniversalInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [selectedId, setSelectedId] = useState(selectedOptionId);

  useEffect(() => {
    setInputValue(value);
    setSelectedId(selectedOptionId);
  }, [value, selectedOptionId]);

  const handleChange = (val: string, optionId?: string) => {
    if (type === "text") {
      setInputValue(val);
      onChange?.(val);
    } else {
      setSelectedId(optionId || "");
      onChange?.(val, optionId);
    }
  };

  return (
    <div
      className={
        type === "radio"
          ? "w-full flex items-center justify-between"
          : "w-full flex flex-col gap-y-2"
      }
    >
      <label htmlFor={id} className="label">
        {label}
      </label>

      {type === "text" && (
        <input
          id={id}
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          className="border rounded-md px-3 py-2 outline-none focus:ring focus:ring-blue-400"
        />
      )}

      {type === "select" && (
        <div className="select-wrapper">
          <select
            id={id}
            value={selectedId}
            onChange={(e) =>
              handleChange(
                e.target.value,
                options.find((o) => o.option_value === e.target.value)?.id
              )
            }
            className="select-input w-[403px]"
          >
            <option value="" disabled>
              Select...
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.option_value}>
                {option.option_text}
              </option>
            ))}
          </select>
          <span className="select-icon">
            <Icon.bottomArrowIcon />
          </span>
        </div>
      )}

      {type === "radio" && (
        <div className="flex items-center gap-3">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id={`${id}-${option.id}`}
                name={id}
                value={option.option_value}
                checked={selectedId === option.id}
                onChange={() => handleChange(option.option_value, option.id)}
              />
              {option.option_text}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversalInput;
