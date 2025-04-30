"use client";
import React, { useState } from "react";
import StatisticsCard from "./StatisticsCard";
import ChartSection from "./ChartSection";
import ApplicationCard from "./ApplicationCard";

function ReportsDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories] = useState([
    "all",
    "general",
    "account",
    "billing",
    "security",
    "support",
  ]);
  const [expandedId, setExpandedId] = useState(null);
  const [faqs] = useState([
    {
      id: 1,
      category: "general",
      question: "What is a job portal?",
      answer:
        "A job portal is an online platform that connects employers with job seekers. It allows companies to post job openings and candidates to search and apply for positions that match their skills and experience.",
    },
    {
      id: 2,
      category: "account",
      question: "How do I create an employer account?",
      answer:
        "To create an employer account, click the 'Sign Up' button and select 'Employer'. Fill in your company details, contact information, and verify your email address. Once verified, you can start posting jobs and managing applications.",
    },
    {
      id: 3,
      category: "billing",
      question: "What are the subscription plans?",
      answer:
        "We offer flexible subscription plans to suit different hiring needs: Basic (free), Professional ($49/month), and Enterprise (custom pricing). Each plan includes different features like number of job posts, candidate search, and analytics access.",
    },
    {
      id: 4,
      category: "security",
      question: "How is my company data protected?",
      answer:
        "We implement industry-standard security measures including encryption, secure data centers, and regular security audits. Your data is protected by strict privacy policies and we never share sensitive information without consent.",
    },
    {
      id: 5,
      category: "support",
      question: "How can I get help with my account?",
      answer:
        "Our support team is available 24/7 through multiple channels: Live chat, email support@jobportal.com, or phone 1-800-JOBS. We also have an extensive help center with guides and tutorials.",
    },
  ]);

  // Dashboard statistics
  const [totalApplications] = useState(156);
  const [totalHires] = useState(24);
  const [totalInterviews] = useState(45);
  const [applicationTrends] = useState([
    45, 52, 49, 65, 48, 56, 52, 51, 48, 52, 55, 62,
  ]);
  const [candidatesByDepartment] = useState({
    Engineering: 45,
    Design: 28,
    Marketing: 22,
    Sales: 35,
    Operations: 26,
  });

  // Recent applications data
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

  function toggleFaq(id) {
    setExpandedId(expandedId === id ? null : id);
  }

  function filterFaqs() {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }

  return (
    <main className=" h-[100vh] px-5 py-10 mb-0 min-h-screen text-white bg-neutral-900">
      <div className="mx-auto my-0 max-w-[1200px]">
        <h1 className="mb-12 text-5xl font-semibold text-center">
          Reports and analysiis
        </h1>

        <section className="mb-10">
          {/* Statistics Cards */}
          <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-3">
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

          {/* Charts Section */}
          <div className="grid gap-6 mb-8 grid-cols-1 lg:grid-cols-[2fr_1fr]">
            <ChartSection
              title="Application Trends"
              chartId="applicationTrends"
              data={applicationTrends}
            />
            <ChartSection
              title="Candidates by Department"
              chartId="departmentPie"
              data={candidatesByDepartment}
              isPieChart={true}
            />
          </div>

        </section>
      </div>
    </main>
  );
}

export default ReportsDashboard;
