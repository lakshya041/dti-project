"use client";
import React, { useState } from "react";
import ApplicationSearch from "./ApplicationSearch";
import ApplicationList from "./ApplicationList";

function ApplicationDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Sarah Wilson",
      role: "Senior Frontend Developer",
      status: "Shortlisted",
      appliedDate: "2024-02-10",
      experience: "8 years",
      location: "San Francisco, CA",
      skills: ["React", "TypeScript", "Node.js"],
      avatar:
        "https://images.pexels.com/photos/3993457/pexels-photo-3993457.jpeg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "DevOps Engineer",
      status: "Under Review",
      appliedDate: "2024-02-09",
      experience: "5 years",
      location: "Seattle, WA",
      skills: ["AWS", "Kubernetes", "Docker"],
      avatar:
        "https://images.pexels.com/photos/17311570/pexels-photo-17311570.jpeg",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Product Designer",
      status: "New",
      appliedDate: "2024-02-08",
      experience: "6 years",
      location: "New York, NY",
      skills: ["Figma", "UI/UX", "Design Systems"],
      avatar:
        "https://images.pexels.com/photos/31793529/pexels-photo-31793529.jpeg",
    },
  ]);

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
