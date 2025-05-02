"use client";
import React, { useEffect, useState } from "react";
import ApplicationSearch from "./ApplicationSearch";
import ApplicationList from "./ApplicationList";

function ApplicationDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [applications, setApplications] = useState([]);
  const [test , setTest] = useState();

  useEffect(() => {
    async function fetchApplications() {
      const res = await fetch("http://localhost:3000/applyJobs/employer/applications", {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.message=="Applications found") {
        setApplications(data.appliedUsers);
      }
    }
    fetchApplications();
  }, []);

  useEffect(() => {
    console.log("Applications:", applications);
  }, [applications]);

  function updateStatus(id, newStatus) {
    setApplications(
      applications.map((app) =>
        app.id === id
          ? {
            ...app,
            status: newStatus,
          }
          : app,
      ),
    );
  }

  function searchApplications() {
    return applications.filter((app) => {
      const matchesSearch =
        !searchQuery ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter =
        filterStatus === "all" || app.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }

  return (
    <main className="p-8 min-h-screen text-white bg-neutral-900">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Applications</h1>
        <ApplicationSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </header>
      <ApplicationList
        applications={searchApplications()}
        updateStatus={updateStatus}
      />
    </main>
  );
}

export default ApplicationDashboard;
