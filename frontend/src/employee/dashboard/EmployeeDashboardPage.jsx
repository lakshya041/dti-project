"use client";
import * as React from "react";
import { useState } from "react";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import ApplicationCard from "./ApplicationCard";
import InterviewCard from "./InterviewCard";

function EmployeeDashboardPage() {
  const [appliedJobs, setAppliedJobs] = useState(() => 24);
  const [activeApplications, setActiveApplications] = useState(() => 12);
  const [interviewsScheduled, setInterviewsScheduled] = useState(() => 3);

  const [myApplications, setMyApplications] = useState(() => [
    {
      id: 1,
      name: "Senior Frontend Developer",
      role: "TechCorp",
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "DevOps Engineer",
      role: "InnoTech",
      status: "Under Review",
    },
    {
      id: 3,
      name: "Product Designer",
      role: "Designify",
      status: "New",
    },
  ]);

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
        <StatCard title="Jobs Applied" value={appliedJobs} />
        <StatCard title="Active Applications" value={activeApplications} />
        <StatCard title="Interviews Scheduled" value={interviewsScheduled} />
      </section>

      <section className="grid gap-6 mb-6 grid-cols-[1fr_1fr]">
        <article className="p-6 rounded-xl border border-solid border-white/10">
          <h3 className="mb-4 text-lg">My Applications</h3>
          <div className="flex flex-col gap-3">
            {myApplications.map((application) => (
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
