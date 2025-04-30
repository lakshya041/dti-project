"use client";
import * as React from "react";
import { useState } from "react";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import ApplicationCard from "./ApplicationCard";
import InterviewCard from "./InterviewCard";

function DashboardPage() {
  const [totalJobs, setTotalJobs] = useState(() => 24);
  const [activeApplications, setActiveApplications] = useState(() => 156);
  const [shortlistedCandidates, setShortlistedCandidates] = useState(() => 45);

  const [recentJobs, setRecentJobs] = useState(() => [
    {
      id: 1,
      title: "Senior Frontend Developer",
      applications: 34,
      posted: "2d ago",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      applications: 28,
      posted: "3d ago",
    },
    {
      id: 3,
      title: "Product Designer",
      applications: 42,
      posted: "5d ago",
    },
  ]);

  const [recentApplications, setRecentApplications] = useState(() => [
    {
      id: 1,
      name: "Sarah Wilson",
      role: "Senior Frontend Developer",
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "DevOps Engineer",
      status: "Under Review",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Product Designer",
      status: "New",
    },
  ]);

  const [upcomingInterviews, setUpcomingInterviews] = useState(() => [
    {
      id: 1,
      candidate: "Sarah Wilson",
      role: "Senior Frontend Developer",
      time: "Today, 2:00 PM",
    },
    {
      id: 2,
      candidate: "James Miller",
      role: "DevOps Engineer",
      time: "Tomorrow, 11:00 AM",
    },
    {
      id: 3,
      candidate: "Lisa Anderson",
      role: "Product Designer",
      time: "Feb 15, 3:30 PM",
    },
  ]);

  return (
    <main className="p-8 min-h-screen text-white bg-neutral-900">
      <section className="grid gap-6 mb-8 grid-cols-[repeat(3,1fr)]">

          <StatCard title="Total Jobs" value={totalJobs} />
        <StatCard title="Active Applications" value={activeApplications} />
        <StatCard title="Shortlisted" value={shortlistedCandidates} />
      </section>

      <section className="grid gap-6 mb-6 grid-cols-[1fr_1fr]">
        <article className="p-6 rounded-xl border border-solid border-white/10">
          <h3 className="mb-4 text-lg">Recent Jobs</h3>
          <div className="flex flex-col gap-3">
            {recentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </article>

        <article className="p-6 rounded-xl border border-solid border-white/10">
          <h3 className="mb-4 text-lg">Recent Applications</h3>
          <div className="flex flex-col gap-3">
            {recentApplications.map((application) => (
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

export default DashboardPage;
