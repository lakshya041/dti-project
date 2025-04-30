import React from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

function ChartSection({ title, data, isPieChart = false }) {
  let chartData;
  const chartOptions = { responsive: true, maintainAspectRatio: false };

  if (isPieChart) {
    chartData = {
      labels: Object.keys(data),
      datasets: [
        {
          label: "Candidates",
          data: Object.values(data),
          backgroundColor: ["#60a5fa", "#f472b6", "#34d399", "#facc15", "#c084fc"],
        },
      ],
    };
  } else {
    chartData = {
      labels: Array.from({ length: data.length }, (_, i) => `Month ${i + 1}`),
      datasets: [
        {
          label: "Applications",
          data,
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56, 189, 248, 0.2)",
          tension: 0.3,
          fill: true,
        },
      ],
    };
  }

  return (
    <section className="h-[500px] p-6 rounded-lg border border-solid bg-neutral-800 border-neutral-700">
      <h3 className="mb-4 text-base text-white">{title}</h3>
      <div className="w-full h-[400px]">
        {isPieChart ? <Pie data={chartData} options={chartOptions} /> : <Line data={chartData} options={chartOptions} />}
      </div>
    </section>
  );
}

export default ChartSection;
