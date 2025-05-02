// ApplyJobsPage.jsx
"use client";
import React, { useEffect, useState } from "react";
import jobImg from "../../public/job.png";
// StatusBadge
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
    <span
      className="px-3 py-1 text-sm rounded-xl h-[40px] flex justify-center items-center"
      style={getStatusStyles()}
    >
      {status}
    </span>
  );
}

// SkillTag
function SkillTag({ children }) {
  return (
    <span className="px-2 py-1 text-xs rounded-xl bg-white/6 border border-solid border-white/10 text-white/80">
      {children}
    </span>
  );
}

// ApplicationCard (no action buttons for employee)
function ApplicationCard({ application }) {
  console.log(application);
  return (
    <article className="flex gap-6 p-6 border-b border-solid border-b-white/10 border-b-opacity-10">
      <img
        className="object-cover w-12 h-12 rounded-full"
        src={jobImg}
        alt={`${application.name}'s profile`}
      />
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <h3 className=" text-base font-semibold">{application.description}</h3>
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
      <StatusBadge status={application.status} />
    </article>
  );
}

// ApplicationList
function ApplicationList({ applications }) {
  return (
    <section className="rounded-xl border border-solid bg-[#ffffff]/3 border-white/10 border-opacity-1">
      {applications.length === 0 ? (
        <p className="p-6 text-center text-zinc-400">
          No applications found matching your criteria.
        </p>
      ) : (
        applications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))
      )}
    </section>
  );
}

// ApplicationSearch
function ApplicationSearch({ searchQuery, setSearchQuery, filterStatus, setFilterStatus }) {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <input
          type="search"
          placeholder="Search applications..."
          className="px-3 py-2 pl-9 text-sm rounded-md border border-solid bg-black/6 bg-opacity-10 border-white/10 text-white w-[300px] outline-none"
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
          aria-label="Search applications"
        />
        <div className="absolute left-3 top-2/4 -translate-y-2/4 text-zinc-400">
          🔍
        </div>
      </div>
      <select
        className="px-3 py-2 text-sm rounded-md border border-solid bg-black/6 bg-opacity-10 border-white/10 text-white outline-none"
        value={filterStatus}
        onChange={(event) => setFilterStatus(event.target.value)}
        aria-label="Filter by status"
      >
        <option value="all">All Status</option>
        <option value="New">New</option>
        <option value="Under Review">Under Review</option>
        <option value="Shortlisted">Shortlisted</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}

// Final Combined Page
function ApplyJobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [applications, setApplications] = useState([]);

    useEffect(() => {
      async function fetchApplications() {
        const token = localStorage.getItem("token");
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/applyJobs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "token": `${token}`,
          },
        });
        const data = await res.json();
        if (data.length > 0) {
          setApplications(data);
        } else {
          setApplications([]);
        }
      }
      fetchApplications();
    }, []);
    useEffect(() => {
      console.log("Applications updated:", applications);
    }, [applications]);

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      !searchQuery ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="p-8 min-h-screen text-white bg-neutral-900">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">My Job Applications</h1>
        <ApplicationSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </header>
      <ApplicationList applications={filteredApplications} />
    </main>
  );
}

export default ApplyJobsPage;
