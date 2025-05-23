import React from "react";

const Button = ({ children, className, onClick, type, title }) => {
  return (
    <button className={className} onClick={onClick} type={type} title={title}>
      {children}
    </button>
  );
};

export default Button;
