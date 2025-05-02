"use client";
import React from "react";
import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";
import SkillTag from "./SkillTag";
import pImage from "../../../public/job.png";

function ApplicationCard({ application, updateStatus }) {
  return (
    <article className="flex gap-6 p-6 border-b border-solid border-b-white/10 border-b-opacity-10">
      <img
        className="object-cover w-12 h-12 rounded-full"
        src={pImage}
        alt={`${application.description}'s profile`}
      />
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <h3 className="text-base font-semibold">{application.description}</h3>
          <div className="flex gap-2 ]">
           
            <ActionButton
              variant="reject"
              onClick={async () => {
                const res = await fetch("http://localhost:3000/applyJobs/apply", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                    token: localStorage.getItem("token"),
                    jobId: application.jobId,
                    status: "rejected",
                  }),
                });
                const data = await res.json();
                console.log(data);
                window.location.reload();
              }}
            >
              Reject
            </ActionButton>
          </div>
        </div>
        <div className="flex gap-6 text-sm text-zinc-400">
          <div>{application.type}</div>
          <div>{application.experienceLevel}</div>
          <div>{application.location}</div>
          <div>{application.organization}</div>
        </div>
        <div className="flex gap-2 mt-3">
          {application.skills?.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ApplicationCard;
