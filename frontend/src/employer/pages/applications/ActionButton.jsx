import React from "react";

function ActionButton({ variant, onClick, children }) {
  const baseClasses =
    "px-3 py-1.5 text-sm rounded-md cursor-pointer border-none text-white";

  const variantClasses =
    variant === "accept" ? "bg-green-700" : "bg-white/10 ";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ActionButton;
