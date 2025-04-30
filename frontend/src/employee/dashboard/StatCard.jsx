import React from "react";

function StatCard({ title, value }) {
  return (
    <article className={`p-6 rounded-xl border border-solid border-white/10`}>
      <h3 className="mb-2 text-sm text-zinc-400">{title}</h3>
      <p className="text-3xl font-semibold">{value}</p>
    </article>
  );
}

export default StatCard;
