import { useState } from "react";
import { CheckCircle, XCircle, Eye, UserCircle } from "lucide-react";

const Applications = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: "Applicant 1", position: "Electrician", status: "Pending", date: "April 1, 2025", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Applicant 2", position: "Sweeper", status: "Pending", date: "March 30, 2025", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Applicant 3", position: "Security guard", status: "Shortlisted", date: "March 28, 2025", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  ]);

  const [selectedApp, setSelectedApp] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const updateStatus = (id, newStatus) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  const filteredApplications = applications.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Applications</h1>

      <input
        type="text"
        placeholder="Search by name or position..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded-lg w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplications.map(app => (
          <div key={app.id} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="flex items-center space-x-4">
              {app.avatar ? (
                <img src={app.avatar} alt={`${app.name}'s avatar`} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <User Circle size={48} className="text-gray-400" />
              )}
              <div>
                <h2 className="text-lg font-semibold">{app.name}</h2>
                <p className="text-gray-500">{app.position}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${app.status === "Shortlisted" ? "text-green-600 bg-green-100" : app.status === "Rejected" ? "text-red-600 bg-red-100" : "text-yellow-600 bg-yellow-100"}`}>
                {app.status}
              </span>
              <span className="text-sm text-gray-500">{app.date}</span>
            </div>

            <div className="mt-5 flex justify-between">
              <button 
                onClick={() => updateStatus(app.id, "Shortlisted")} 
                className="cursor-pointer flex items-center space-x-2 text-green-500 hover:text-white hover:bg-green-500 px-4 py-2 rounded-lg transition"
              >
                <CheckCircle size={20} />
                <span>Shortlist</span>
              </button>

              <button 
                onClick={() => updateStatus(app.id, "Rejected")} 
                className="cursor-pointer flex items-center space-x-2 text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-lg transition"
              >
                <XCircle size={20} />
                <span>Reject</span>
              </button>

              <button 
                onClick={() => setSelectedApp(app)}
                className="cursor-pointer flex items-center space-x-2 text-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-lg transition"
               >
                <Eye size={20} />
                <span>View</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Details Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] shadow-lg">
            <h2 className="text-xl font-bold mb-3">{selectedApp.name}</h2>
            <p><span className="font-semibold">Position:</span> {selectedApp.position}</p>
            <p><span className="font-semibold">Status:</span> {selectedApp.status}</p>
            <p><span className="font-semibold">Applied On:</span> {selectedApp.date}</p>
            <div className="mt-5 text-right">
              <button 
                onClick={() => setSelectedApp(null)} 
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;