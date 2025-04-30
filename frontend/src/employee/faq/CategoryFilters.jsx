import React from "react";
import CategoryButton from "./CategoryButton";

function CategoryFilters({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          isActive={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        />
      ))}
    </div>
  );
}

export default CategoryFilters;
