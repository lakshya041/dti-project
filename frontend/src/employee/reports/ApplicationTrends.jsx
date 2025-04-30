import React from "react";

function ApplicationTrends({ data }) {
  // Find the maximum count to scale the bars properly
  const maxCount = Math.max(...data.map((item) => item.count));

  return (
    <section className="p-6 rounded-xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
      <h2 className="mb-6 text-xl">Application Trends</h2>
      <div className="p-4 rounded-lg h-[300px] flex flex-col">
        <div className="flex-1 flex items-end justify-between gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <div
                className="w-full bg-blue-500 rounded-t-md transition-all duration-500 ease-in-out hover:bg-blue-400"
                style={{
                  height: `${(item.count / maxCount) * 100}%`,
                  minHeight: "20px",
                }}
                aria-label={`${item.count} applications on ${item.date}`}
              />
              <div className="text-xs text-center">{item.count}</div>
              <div className="text-xs text-center text-zinc-400">
                {item.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <div className="text-sm text-zinc-400">Date</div>
          <div className="text-sm text-zinc-400">Applications</div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationTrends;
