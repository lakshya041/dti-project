import React from "react";

function ApplicationCard({ application }) {
  const getStatusStyles = (status) => {
    return {
      backgroundColor:
        status === "Shortlisted"
          ? "rgba(121, 192, 255, 0.1)"
          : "rgba(255, 255, 255, 0.1)",
      color:
        status === "Shortlisted" ? "rgb(121, 192, 255)" : "rgb(255, 255, 255)",
    };
  };

  return (
    <article className="flex justify-between items-center p-3 rounded-lg bg-[#FFFFFF]/3">
      <div>
        <h4 className="mb-1 text-base">{application.description}</h4>
        <div className="flex gap-[10px]">
        <p className="text-sm text-zinc-400">{application.type}</p>
        <p className="text-sm text-zinc-400">{application.location}</p>
        <p className="text-sm text-zinc-400">{application.organization}</p>
        </div>
      </div>
      <span
        className="px-3 py-1 text-sm rounded-xl"
        style={getStatusStyles(application.status)}
      >
        {application.status}
      </span>
    </article>
  );
}

export default ApplicationCard;
