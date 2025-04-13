import React from "react"
import styles from "./button.module.scss"

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button
