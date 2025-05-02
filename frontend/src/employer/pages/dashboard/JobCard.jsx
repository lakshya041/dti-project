import React from "react";

function JobCard({ job }) {
  return (
    <article className="flex justify-between items-center p-3 rounded-lg bg-[#FFFFFF]/3 ">
      <div>
        <h4 className="mb-1 text-base">{job.description}</h4>
        <p className="text-sm text-zinc-400">
          <span>{job.applications}</span>
        </p>
      </div>
      <time className="text-zinc-400">{job.type}</time>
      <time className="text-zinc-400">{job.experienceLevel}</time>
      <time className="text-zinc-400">{job.location}</time>
    </article>
  );
}

export default JobCard;
