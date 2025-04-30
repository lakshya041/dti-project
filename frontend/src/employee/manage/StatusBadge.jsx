import React from "react";

function StatusBadge({ status }) {
  const getStatusStyles = () => {
    switch (status) {
      case "Shortlisted":
        return {
          backgroundColor: "rgba(121, 192, 255, 0.1)",
          color: "rgb(121, 192, 255)",
        };
      case "Rejected":
        return {
          backgroundColor: "rgba(255, 129, 130, 0.1)",
          color: "rgb(255, 129, 130)",
        };
      default:
        return {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "rgb(255, 255, 255)",
        };
    }
  };

  return (
    <span className="px-3 py-1 text-sm rounded-xl h-[40px] flex justify-center items-center" style={getStatusStyles()}>
      {status}
    </span>
  );
}

export default StatusBadge;
