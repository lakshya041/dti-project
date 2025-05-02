"use client";
import React from "react";

function ApplicationSearch({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <input
          type="search"
          placeholder="Search jobs..."
          className="px-3 py-2 pl-9 text-sm rounded-md border border-solid bg-black/6 bg-opacity-10 border-white/10 text-white w-[300px] outline-none"
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
          aria-label="Search applications"
        />
        <div className="absolute left-3 top-2/4 -translate-y-2/4 text-zinc-400">
          🔍
        </div>
      </div>
      {/* <select
        className="px-3 py-2 text-sm rounded-md border border-solid bg-black/6 bg-opacity-10 border-white/10 text-white outline-none"
        value={filterStatus}
        onChange={(event) => setFilterStatus(event.target.value)}
        aria-label="Filter by status"
      >
        <option value="all">All Status</option>
        <option value="New">New</option>
        <option value="Under Review">Under Review</option>
        <option value="Shortlisted">Shortlisted</option>
        <option value="Rejected">Rejected</option>
      </select> */}
    </div>
  );
}

export default ApplicationSearch;
