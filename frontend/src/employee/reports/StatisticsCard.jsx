import React from "react";

function StatisticsCard({ title, value, change }) {
  return (
    <article className="p-6 rounded-lg border border-solid bg-black/1 border-white/20">
      <h3 className="mb-2 text-sm text-zinc-400">{title}</h3>
      <p className="text-4xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sky-300">{change}</p>
    </article>
  );
}

export default StatisticsCard;
