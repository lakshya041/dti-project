import React from "react";
import FAQItem from "./FAQItem";

function FAQList({ faqs, expandedId, onToggle }) {
  if (faqs.length === 0) {
    return (
      <p className="text-center text-gray-400 py-8">
        No FAQs match your search criteria. Try a different search term or
        category.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isExpanded={expandedId === faq.id}
          onToggle={() => onToggle(faq.id)}
        />
      ))}
    </div>
  );
}

export default FAQList;
