import React, { useState } from "react";
import StatisticsCard from "./StatisticsCard";
import ChartSection from "./ChartSection";
import ApplicationCard from "./ApplicationCard";

function EmployeeReportsDashboard() {
  const [totalApplications] = useState(156);
  const [totalHires] = useState(24);
  const [totalInterviews] = useState(45);
  const [applicationTrends] = useState([
    45, 52, 49, 65, 48, 56, 52, 51, 48, 52, 55, 62,
  ]);
  const [candidatesByDepartment] = useState({
    Electrician: 45,
    Plumber: 28,
    SecurityGuard: 22,
    Gardner: 35,
    Operations: 26,
  });
  const [recentApplications] = useState([
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

  return (
    <main className="px-5 py-10 min-h-screen text-white bg-neutral-900">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-12 text-5xl font-semibold text-center">
          Employee Report Overview
        </h1>

        {/* Statistics */}
        <div className="grid gap-6 mb-10 grid-cols-1 md:grid-cols-3">
          <StatisticsCard
            title="Total Applications"
            value={totalApplications}
            change="+12% from last month"
          />
          <StatisticsCard
            title="Total Interviews"
            value={totalInterviews}
            change="+8% from last month"
          />
          <StatisticsCard
            title="Total Hires"
            value={totalHires}
            change="+15% from last month"
          />
        </div>

        {/* Charts */}
        <div className="grid gap-6 mb-12 grid-cols-1 lg:grid-cols-[2fr_1fr]">
          <ChartSection title="Application Trends" data={applicationTrends} />
          <ChartSection
            title="Applications by different fields"
            data={candidatesByDepartment}
            isPieChart
          />
        </div>
      </div>
    </main>
  );
}

export default EmployeeReportsDashboard;
