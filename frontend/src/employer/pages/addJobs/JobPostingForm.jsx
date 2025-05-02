"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "full-time",
    experienceLevel: "Noexperience",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/addjobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        title: formData.title,
        organization: formData.company,
        location: formData.location,
        type: formData.type,
        experienceLevel: formData.experienceLevel,
        description: formData.description,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  const jobTypeOptions = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
  ];

  const experienceOptions = [
    { value: "Noexperience", label: "No experience" },
    { value: "experienced", label: "Experienced" },
    { value: "expert", label: "Expert" },
  ];

  return (
    <div className="p-10 min-h-screen text-white bg-neutral-900">
      <section className="p-8 mx-auto rounded-xl border border-solid bg-black/6 bg-opacity-10 border-white/10 max-w-[800px]">
        <h1 className="mb-8 text-3xl font-semibold text-center">
          Post a New Job
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <FormInput
            label="Job Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <div className="flex gap-6">
            <div className="flex-1">
              <FormInput
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex-1">
              <FormSelect
                label="Job Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                options={jobTypeOptions}
                required
              />
            </div>

            <div className="flex-1">
              <FormSelect
                label="Experience Level"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                options={experienceOptions}
                required
              />
            </div>
          </div>

          <FormTextArea
            label="Job Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="p-3.5 mt-4 text-base font-semibold bg-green-700 rounded-md cursor-pointer transition-colors duration-200 hover:bg-green-600 text-white"
          >
            Post Job
          </button>
        </form>
      </section>
    </div>
  );
};

export default JobPostingForm;
