"use client";
import * as React from "react";
import { useState } from "react";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import ApplicationCard from "./ApplicationCard";
import InterviewCard from "./InterviewCard";
import { useEffect } from "react";

function DashboardPage() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [activeApplications, setActiveApplications] = useState(() => 156);
  const [shortlistedCandidates, setShortlistedCandidates] = useState(() => 45);
  const [recentJobs, setRecentJobs] = useState(() => []);
  const [recentApplications, setRecentApplications] = useState(() => []);

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
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/loadAlluserJobs/`, {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.message === "got jobs") {
        console.log(data.jobs);
        setTotalJobs(data.jobs.length);
        setActiveApplications(data.jobs.length)
        setRecentJobs(data.jobs.slice(0, 3));
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    async function fetchApplications() {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/applyJobs/employer/applications`, {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setRecentApplications(data.appliedUsers);
    }
    fetchApplications();
  }, []);

  useEffect(() => {
    console.log(recentApplications)
  }
    , [recentApplications]);

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
            {recentApplications  ? (
              recentApplications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))
            ) : (
              <p>No recent applications found.</p>
            )}
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
