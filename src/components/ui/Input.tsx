import {
  useRef,
  useState,
  type HTMLAttributes,
  type HTMLInputTypeAttribute,
} from "react";
import "../../assets/styles/input.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Icon from "./Icon";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  eyeIcon?: boolean;
  inputClassName: string;
  required?: boolean;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  locationIcon?: boolean;
}

const Input = ({
  label,
  placeholder,
  required,
  eyeIcon,
  inputClassName,
  type,
  locationIcon,
  ...props
}: InputProps) => {
  const [visible, setVisible] = useState<HTMLInputTypeAttribute>(type);
  const handleTypechangeInput = () => {
    if (visible === "password") {
      return setVisible("text");
    }
    setVisible("password");
  };
  return (
    <div className="flex flex-col gap-y-2">
      <label className="label">{label}</label>
      <div className="relative">
        <input
          type={visible}
          className={`input ${inputClassName}`}
          placeholder={placeholder}
          required={required}
          {...props}
        />
        {eyeIcon && (
          <button
            type="button"
            className="absolute cursor-pointer bg-transparent top-[50%] z-50 translate-y-[-50%] right-[16px] flex items-center"
            onClick={handleTypechangeInput}
          >
            {visible === "password" ? (
              <IoEyeOutline className="size-5" />
            ) : (
              <IoEyeOffOutline className="size-5" />
            )}
          </button>
        )}
        {locationIcon && (
          <button
            type="button"
            className="absolute cursor-pointer bg-transparent top-[50%] z-50 translate-y-[-50%] right-[16px] flex items-center"
          >
            <Icon.location />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
