import React from "react";

function SearchInput({ value, onChange }) {
  return (
    <div className="mb-10">
      <input
        className="p-4 w-full text-lg rounded-lg border border-solid bg-black/6 bg-opacity-10 border-neutral-700 text-white placeholder-gray-400"
        type="text"
        placeholder="Search FAQs..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search frequently asked questions"
      />
    </div>
  );
}

export default SearchInput;
