"use client";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import CategoryFilters from "./CategoryFilters";
import FAQList from "./FAQList";

function EmployeeFAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const categories = [
    "all",
    "general",
    "account",
    "billing",
    "security",
    "support",
  ];

  const faqs = [
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
  ];

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const toggleFaq = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filterFaqs = () => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  };

  return (
    <section className="px-5 py-10 min-h-screen text-white bg-neutral-900">
      <div className="mx-auto my-0 max-w-[1200px]">
        <h1 className="mb-12 text-5xl font-semibold text-center">
          Frequently Asked Questions
        </h1>

        <SearchInput value={searchQuery} onChange={handleSearchChange} />

        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <FAQList
          faqs={filterFaqs()}
          expandedId={expandedId}
          onToggle={toggleFaq}
        />
      </div>
    </section>
  );
}

export default EmployeeFAQSection;
