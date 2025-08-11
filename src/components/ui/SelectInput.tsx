import { useState } from "react";
import "../../assets/styles/input.css";
import Icon from "./Icon";

interface SelectInputProps {
  label: string;
  options: { value: string; label: string }[];
}

const SelectInput = ({ label, options }: SelectInputProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="w-full flex flex-col gap-y-2">
      <label className="label">{label}</label>
      <div className="select-wrapper">
        <select
          className="select-input w-[403px]"
          id="goal"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-icon">
          <Icon.bottomArrowIcon />
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
