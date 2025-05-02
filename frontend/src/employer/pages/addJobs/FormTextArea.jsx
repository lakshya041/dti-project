"use client";

import React from "react";

const FormTextArea = ({ label, rows = 6, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium">{label}</label>
      <textarea
        rows={rows}
        className={`outline-none p-3 text-base rounded-md border border-solid resize-y bg-white/5 border-white/10 border-opacity-20 text-white ${className}`}
        {...props}
      />
    </div>
  );
};

export default FormTextArea;
