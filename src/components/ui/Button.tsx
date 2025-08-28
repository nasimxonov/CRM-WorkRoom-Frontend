import React, { type HTMLAttributes } from "react";
import "../../assets/styles/button.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium";
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

const Button = ({
  variant,
  disabled = false,
  children,
  className,
  type,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`btn ${variant} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
