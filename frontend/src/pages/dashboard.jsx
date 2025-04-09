import React from 'react';
import { Briefcase, Users, CheckCircle, UserPlus } from 'lucide-react';

const EmployerDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Employer Dashboard</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Job Listings" value="12" icon={<Briefcase size={24} />} color="bg-gradient-to-r from-blue-400 to-blue-600" />
        <DashboardCard title="Active Applications" value="34" icon={<Users size={24} />} color="bg-gradient-to-r from-yellow-400 to-yellow-600" />
        <DashboardCard title="Shortlisted Candidates" value="8" icon={<CheckCircle size={24} />} color="bg-gradient-to-r from-green-400 to-green-600" />
        {/* <DashboardCard title="Hired Employees" value="3" icon={<User Plus size={24} />} color="bg-gradient-to-r from-purple-400 to-purple-600" /> */}
      </div>

      {/* Recent Job Listings */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Job Listings</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Job Title</th>
              <th className="py-2">Department</th>
              <th className="py-2">Posted On</th>
            </tr>
          </thead>
          <tbody>
            {[
              { title: "Software Engineer", department: "Engineering", postedOn: "April 1, 2025" },
              { title: "Marketing Manager", department: "Marketing", postedOn: "March 28, 2025" },
              { title: "UX Designer", department: "Design", postedOn: "March 25, 2025" },
            ].map((job, index) => (
              <tr key={index} className="border-b text-gray-700 hover:bg-gray-100 transition">
                <td className="py-2">{job.title}</td>
                <td className="py-2">{job.department}</td>
                <td className="py-2">{job.postedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-right">
          <button className="text-blue-500 hover:underline">View All Job Listings</button>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Applications</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Candidate</th>
              <th className="py-2">Position</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Alice Johnson", position: "Software Engineer", status: "Shortlisted" },
              { name: "David Smith", position: "Marketing Manager", status: "Pending" },
              { name: "Emma Brown", position: "UX Designer", status: "Rejected" },
            ].map((app, index) => (
              <tr key={index} className="border-b text-gray-700 hover:bg-gray-100 transition">
                <td className="py-2">{app.name}</td>
                <td className="py-2">{app.position}</td>
                <td className={`py-2 font-semibold ${app.status === "Shortlisted" ? "text-green-500" : app.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
                  {app.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-right">
          <button className="text-blue-500 hover:underline">View All Applications</button>
        </div>
      </div>

      {/* Upcoming Interviews */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Interviews</h2>
        <ul className="space-y-3 text-gray-700">
          <li>📅 Alice Johnson - Software Engineer (April 10, 10:00 AM)</li>
          <li>📅 David Smith - Marketing Manager (April 12, 2:00 PM)</li>
          <li>📅 Emma Brown - UX Designer (April 15, 11:00 AM)</li>
        </ul>
        <div className="mt-4 text-right">
          <button className="text-blue-500 hover:underline">Schedule New Interview</button>
        </div>
      </div>
    </div>
  );
};

// Dashboard Card Component
const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className={`flex items-center p-4 ${color} text-white rounded-lg shadow-md hover:shadow-lg transition`}>
      <div className="mr-4">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default EmployerDashboard;