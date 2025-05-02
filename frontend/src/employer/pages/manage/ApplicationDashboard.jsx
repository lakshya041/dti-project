"use client";
import React, { useState } from "react";
import ApplicationSearch from "./ApplicationSearch";
import ApplicationList from "./ApplicationList";
import { useEffect } from "react";

function ManageDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    async function fetchApplications() {
      try {
        const res = await fetch("http://localhost:3000/applyJobs/selected", {
          method: "GET",
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        const data2 = await res.json();
        const data = data2.employees;
        if (Array.isArray(data)) {
          setApplications(data);
        } else {
          console.error("Expected array, got:", data);
          setApplications([]); // fallback
        }
      } catch (err) {
        console.error("Failed to fetch applications:", err);
        setApplications([]); // fallback
      }
    }
    fetchApplications();
  }, []);
  
  useEffect(() => {
    console.log(applications);
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
        <h1 className="text-2xl font-semibold">Manage Employees</h1>
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

export default ManageDashboard;
