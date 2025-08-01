import React, { type HTMLAttributes } from "react";
import "../../assets/styles/button.css";
import Icon from "./Icon";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium";
  children: React.ReactNode;
}

const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button className={`btn ${variant} ${className} cursor-pointer`} {...props}>
      {children}
    </button>
  );
};

export default Button;
