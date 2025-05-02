"use client";
import React from "react";
import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";
import SkillTag from "./SkillTag";

function ApplicationCard({ application, updateStatus }) {
  return (
    <article className="flex gap-6 p-6 border-b border-solid border-b-white/10 border-b-opacity-10">
      <img
        className="object-cover w-12 h-12 rounded-full"
        src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
        alt={`${application.name}'s profile`}
      />
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <h3 className="text-base font-semibold">{application._doc.username}</h3>
          <div className="flex gap-2 ]">
            <ActionButton
              variant="accept"
              onClick={async () => {
                console.log("Accepting application", application);
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/applyJobs/select`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                    jobId: application.matchedJobIds[0],
                    employeeUsername: application.username,
                  }),
                });
                window.location.reload();
              } }
            >
              Accept
            </ActionButton>
            <ActionButton
              variant="reject"
              onClick={async () => {
                console.log("Accepting application", application);
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/applyJobs/reject`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                    jobId: application.matchedJobIds[0],
                    employeeUsername: application.username,
                  }),
                });
                window.location.reload();
              } }
            >
              Reject
            </ActionButton>
            <div className="cursor-pointer hover:bg-white/15 bg-white/10 flex justify-center items-center px-[10px] rounded-[10px]">View Profile</div>
          </div>
        </div>
         <div className="flex gap-6 text-sm text-zinc-400">
          <div>{application._doc.role}</div>
          <div>Experience: {application._doc.experience} Years</div>
          <div>Location: {application._doc.location}</div>
        </div> 
         <div className="flex gap-2 mt-3">
          {application.skills?.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div> 
      </div>
      {/* <StatusBadge status={application.status} /> */}
    </article>
  );
}

export default ApplicationCard;
