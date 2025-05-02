"use client";
import * as React from "react";
import { useState } from "react";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import ApplicationCard from "./ApplicationCard";
import InterviewCard from "./InterviewCard";
import { useEffect } from "react";

function EmployeeDashboardPage() {
  const [appliedJobs, setAppliedJobs] = useState(() => 24);
  const [activeApplications, setActiveApplications] = useState(() => 12);
  const [interviewsScheduled, setInterviewsScheduled] = useState(() => 3);

  const [myApplications, setMyApplications] = useState(() => []);

  useEffect(() => {
    async function fetchApplications() {
      const res = await fetch("http://localhost:3000/applyJobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": `${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setMyApplications(data);

    }
    fetchApplications();
  }, []);
  useEffect(() => {
    console.log("Applications updated:", myApplications);
  }, [myApplications]);

  const [upcomingInterviews, setUpcomingInterviews] = useState(() => [
    {
      id: 1,
      candidate: "You",
      role: "Senior Frontend Developer at TechCorp",
      time: "Today, 2:00 PM",
    },
    {
      id: 2,
      candidate: "You",
      role: "DevOps Engineer at InnoTech",
      time: "Tomorrow, 11:00 AM",
    },
    {
      id: 3,
      candidate: "You",
      role: "Product Designer at Designify",
      time: "May 5, 3:30 PM",
    },
  ]);

  return (
    <main className="p-8 min-h-screen text-white bg-neutral-900">
      <section className="grid gap-6 mb-8 grid-cols-[repeat(3,1fr)]">
        <StatCard title="Jobs Applied" value={myApplications.length} />
        <StatCard title="Active Applications" value={myApplications.length} />
        <StatCard title="Interviews Scheduled" value={interviewsScheduled} />
      </section>

      <section className="grid gap-6 mb-6 grid-cols-[1fr_1fr]">
        <article className="p-6 rounded-xl border border-solid border-white/10">
          <h3 className="mb-4 text-lg">My Applications</h3>
          <div className="flex flex-col gap-3">
            {myApplications.map((application,index) => (
              index<3 && 
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        </article>
      </section>

      <section className="p-6 rounded-xl border border-solid border-white/10 bg-[#FFFFFF]/3">
        <h3 className="mb-4 text-lg">Upcoming Interviews</h3>
        <div className="flex flex-col gap-3">
          {upcomingInterviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default EmployeeDashboardPage;
