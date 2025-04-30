import React from "react";

function ApplicationCard({ application }) {
  // Determine status badge styling based on status
  const getStatusStyles = (status) => {
    switch (status) {
      case "New":
        return {
          backgroundColor: "rgba(121, 192, 255, 0.1)",
          color: "rgb(121, 192, 255)",
        };
      case "Shortlisted":
        return {
          backgroundColor: "rgba(163, 113, 247, 0.1)",
          color: "rgb(163, 113, 247)",
        };
      case "Under Review":
        return {
          backgroundColor: "rgba(255, 170, 91, 0.1)",
          color: "rgb(255, 170, 91)",
        };
      default:
        return {
          backgroundColor: "rgba(121, 192, 255, 0.1)",
          color: "rgb(121, 192, 255)",
        };
    }
  };

  const statusStyles = getStatusStyles(application.status);

  return (
    <article className="p-4 rounded-md border border-solid bg-white bg-opacity-0 border-white border-opacity-10">
      <h4 className="mb-1 font-medium text-white">{application.name}</h4>
      <p className="text-sm text-zinc-400">{application.role}</p>
      <span
        className="inline-block px-2 py-1 mt-2 text-xs rounded-xl"
        style={statusStyles}
      >
        {application.status}
      </span>
    </article>
  );
}

export default ApplicationCard;
