import React, { type HTMLAttributes } from "react";
import "../../assets/styles/button.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium";
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  variant,
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`btn ${variant} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
