import React from "react";

const Button = ({ children, className, onClick, type, title, disabled }) => {
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
