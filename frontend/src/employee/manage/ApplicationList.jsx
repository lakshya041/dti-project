"use client";
import React from "react";
import ApplicationCard from "./ApplicationCard";

function ApplicationList({ applications, updateStatus }) {
  return (
    <section className="rounded-xl border border-solid bg-[#ffffff]/3 border-white/10 border-opacity-1">
      {applications.length === 0 ? (
        <p className="p-6 text-center text-zinc-400">
          No applications found matching your criteria.
        </p>
      ) : (
        applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            updateStatus={updateStatus}
          />
        ))
      )}
    </section>
  );
}

export default ApplicationList;
