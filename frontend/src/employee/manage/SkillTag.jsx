import React from "react";

function SkillTag({ children }) {
  return (
    <span className="px-2 py-1 text-xs rounded-xl bg-white/6 border border-solid border-white/10 text-white/80">
      {children}
    </span>
  );
}

export default SkillTag;
