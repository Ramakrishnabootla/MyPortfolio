import React from "react";

const Button = ({ onClick, children, icon: Icon, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-poppins font-semibold text-[18px] text-white rounded-[10px] ss:text-[20px] bg-blue-gradient box-shadow hover:bg-secondary transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 justify-center">
        {Icon && <Icon />}
        {children}
      </div>
    </button>
  );
};

export default Button;
