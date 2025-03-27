import { useState } from "react";

export default function AdminDashboard() {
  const [applications, setApplications] = useState([
    { id: 1, name: "John Doe", status: "Pending", date: "2025-03-27" },
    { id: 2, name: "Alice Smith", status: "Approved", date: "2025-03-20" },
    { id: 3, name: "Michael Johnson", status: "Rejected", date: "2025-03-22" },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-500">Admin Panel</div>
        <nav className="flex-grow">
          <SidebarItem label="Applications" />
          <SidebarItem label="Users" />
          <SidebarItem label="Settings" />
        </nav>
        <div className="p-4 border-t border-blue-500 flex items-center cursor-pointer hover:bg-blue-600">
          Logout
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Applications</h2>
          <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        {/* Applications Table */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{app.id}</td>
                  <td className="p-3">{app.name}</td>
                  <td className={`p-3 font-semibold ${getStatusColor(app.status)}`}>
                    {app.status}
                  </td>
                  <td className="p-3">{app.date}</td>
                  <td className="p-3">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Approve</button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ label }) {
  return (
    <div className="p-4 flex items-center cursor-pointer hover:bg-blue-600">
      {label}
    </div>
  );
}

// Helper function for status colors
function getStatusColor(status) {
  switch (status) {
    case "Pending":
      return "text-yellow-500";
    case "Approved":
      return "text-green-500";
    case "Rejected":
      return "text-red-500";
    default:
      return "text-gray-700";
  }
}
