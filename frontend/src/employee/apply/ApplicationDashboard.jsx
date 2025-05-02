"use client";
import React, { useEffect, useState } from "react";
import ApplicationSearch from "./ApplicationSearch";
import ApplicationList from "./ApplicationList";

function EmployeeManageDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchApplications() {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/applyJobs/loadallJobs`, {
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
        <h1 className="text-2xl font-semibold">Apply For Jobs</h1>
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

export default EmployeeManageDashboard;
