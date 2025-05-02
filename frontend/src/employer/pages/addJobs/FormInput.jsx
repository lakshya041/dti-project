"use client";

import React from "react";

const FormInput = ({ label, type = "text", className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium">{label}</label>
      <input
        type={type}
        className={`outline-none p-3 text-base rounded-md border border-solid bg-white/4 bg-opacity-10 border-white/10 border-opacity-20 text-white ${className}`}
        {...props}
      />
    </div>
  );
};

export default FormInput;
