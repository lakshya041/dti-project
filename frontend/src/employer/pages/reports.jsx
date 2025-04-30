import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const ReportsAndAnalysis = () => {
  const [data, setData] = useState([
    { name: "Applications", count: 3 },
    { name: "Complaints", count: 3 },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reports and Analysis</h1>

      <div className="bg-white p-5 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Applications</h3>
            <p className="text-2xl font-bold">{data[0].count}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Complaints</h3>
            <p className="text-2xl font-bold">{data[1].count}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Data Visualization</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReportsAndAnalysis;