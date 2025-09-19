import React from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary" }) => {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition focus:outline-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
