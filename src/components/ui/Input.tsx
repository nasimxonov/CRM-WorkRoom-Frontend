import { useRef, useState, type HTMLAttributes } from "react";
import "../../assets/styles/input.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  type?: string;
  eyeIcon?: boolean;
  inputClassName: string;
}

const Input = ({
  label,
  placeholder,
  eyeIcon,
  inputClassName,
  ...props
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState("password");
  const handleTypeInput = () => {
    const inputEl = ref.current as HTMLInputElement;
    if (visible === "password") {
      return setVisible("text");
    }
    setVisible("password");
  };
  return (
    <div className="flex flex-col gap-y-2">
      <label>{label}</label>
      <div className="relative">
        <input
          type={visible}
          ref={ref}
          className={`input ${inputClassName}`}
          placeholder={placeholder}
          {...props}
        />
        {eyeIcon && (
          <button
            type="button"
            className="absolute cursor-pointer bg-transparent top-[50%] z-50 translate-y-[-50%] right-[16px] flex items-center"
            onClick={handleTypeInput}
          >
            {visible === "password" ? (
              <IoEyeOutline className="size-5" />
            ) : (
              <IoEyeOffOutline className="size-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
