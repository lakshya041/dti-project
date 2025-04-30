import React from "react";

function JobCard({ job }) {
  return (
    <article className="flex justify-between items-center p-3 rounded-lg bg-[#FFFFFF]/3 ">
      <div>
        <h4 className="mb-1 text-base">{job.title}</h4>
        <p className="text-sm text-zinc-400">
          <span>{job.applications}</span>
          <span> applications</span>
        </p>
      </div>
      <time className="text-zinc-400">{job.posted}</time>
    </article>
  );
}

export default JobCard;
