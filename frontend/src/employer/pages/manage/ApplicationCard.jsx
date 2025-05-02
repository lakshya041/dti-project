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
        src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"
        alt={`${application.name}'s profile`}
      />
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <h3 className="text-base font-semibold">{application.username}</h3>
          <div className="flex gap-2 ]">
           
            <ActionButton
              variant="reject"
              onClick={() => updateStatus(application.id, "Rejected")}
            >
              Reject
            </ActionButton>
          </div>
        </div>
        <div className="flex gap-6 text-sm text-zinc-400">
          <div>{application.role}</div>
          <div>{application.experience}</div>
          <div>{application.location}</div>
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
