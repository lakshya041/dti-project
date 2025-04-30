import React from "react";

function CategoryButton({ category, isActive, onClick }) {
  const displayName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <button
      className={`px-4 py-2 rounded-3xl border border-solid transition-all cursor-pointer border-neutral-700 duration-200 ${
        isActive
          ? "bg-[rgb(121,192,255)] text-[rgb(13,17,23)]"
          : "bg-transparent text-white"
      }`}
      onClick={onClick}
      aria-pressed={isActive}
      type="button"
    >
      {displayName}
    </button>
  );
}

export default CategoryButton;
