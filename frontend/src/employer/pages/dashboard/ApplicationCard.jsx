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
        <h4 className="mb-1 text-base">{application.username}</h4>
        <p className="text-sm text-zinc-400">{application.role}</p>
      </div>
      <span
        className= "cursor-pointer px-3 py-1 text-sm rounded-xl"
        style={getStatusStyles(application.status)}
      >
        View Profile
      </span>
    </article>
  );
}

export default ApplicationCard;
