import React from "react";

function FAQItem({ faq, isExpanded, onToggle }) {
  return (
    <article className="overflow-hidden rounded-lg border border-solid border-neutral-700">
      <button
        className="flex justify-between items-center p-5 w-full cursor-pointer bg-black/6 bg-opacity-10 border-none text-white"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${faq.id}`}
        type="button"
      >
        <span className="text-lg font-medium text-left">{faq.question}</span>
        <span
          className="transition-transform duration-300"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "none",
          }}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        className="overflow-hidden bg-black/10 bg-opacity-0 transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: isExpanded ? "500px" : "0",
        }}
      >
        <p className="p-5 m-0 leading-relaxed text-zinc-400">{faq.answer}</p>
      </div>
    </article>
  );
}

export default FAQItem;
