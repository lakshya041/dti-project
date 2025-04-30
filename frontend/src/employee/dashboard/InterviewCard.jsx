import React from "react";

function InterviewCard({ interview }) {
  return (
    <article className="flex justify-between items-center p-3 rounded-lg bg-[#FFFFFF]/3">
      <div>
        <h4 className="mb-1 text-base">Interview for {interview.role}</h4>
        <p className="text-sm text-zinc-400">Scheduled with: {interview.candidate}</p>
      </div>
      <time className="px-3 py-1 text-sm text-sky-300 rounded-xl bg-[#FFFFFF]/3">
        {interview.time}
      </time>
    </article>
  );
}

export default InterviewCard;
