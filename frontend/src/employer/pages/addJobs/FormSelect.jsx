"use client";

import React from "react";

const FormSelect = ({ label, options, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium">{label}</label>
      <select
        className={`outline-none p-3 text-base rounded-md border border-solid bg-white/5  border-white/10 border-opacity-20 text-white ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
