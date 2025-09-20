import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors
        ${active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
