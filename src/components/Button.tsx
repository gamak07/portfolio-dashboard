import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  title?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  className,
  onClick,
  type,
  title,
  disabled,
}:ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
      type={type}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
