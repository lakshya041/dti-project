import { useState } from "react";
import { CheckCircle, XCircle, Eye, UserCircle } from "lucide-react";

const Complaints = () => {
  const [complaints, setComplaints] = useState([
    { id: 1, name: "Jay", issue: "Late delivery", status: "Pending", date: "April 1, 2025", avatar: "https://randomuser.me/api/portraits/men/44.jpg" },
    { id: 2, name: "Jyoti", issue: "Product damaged", status: "Resolved", date: "March 30, 2025", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
    { id: 3, name: "E", issue: "Wrong item received", status: "Pending", date: "March 28, 2025", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  ]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const updateStatus = (id, newStatus) => {
    setComplaints(complaints.map(comp => comp.id === id ? { ...comp, status: newStatus } : comp));
  };

  const filteredComplaints = complaints.filter(comp =>
    comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.issue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Complaints</h1>

      <input
        type="text"
        placeholder="Search by name or issue..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded-lg w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComplaints.map(comp => (
          <div key={comp.id} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="flex items-center space-x-4">
              {comp.avatar ? (
                <img src={comp.avatar} alt={`${comp.name}'s avatar`} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <User Circle size={48} className="text-gray-400" />
              )}
              <div>
                <h2 className="text-lg font-semibold">{comp.name}</h2>
                <p className="text-gray-500">{comp.issue}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${comp.status === "Resolved" ? "text-green-600 bg-green-100" : "text-yellow-600 bg-yellow-100"}`}>
                {comp.status}
              </span>
              <span className="text-sm text-gray-500">{comp.date}</span>
            </div>

            <div className="mt-5 flex justify-between">
              <button 
                onClick={() => updateStatus(comp.id, "Resolved")} 
                className="cursor-pointer flex items-center space-x-2 text-green-500 hover:text-white hover:bg-green-500 px-4 py-2 rounded-lg transition"
              >
                <CheckCircle size={20} />
                <span>Resolve</span>
              </button>

              <button 
                onClick={() => updateStatus(comp.id, "Rejected")} 
                className="cursor-pointer flex items-center space-x-2 text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-lg transition"
              >
                <XCircle size={20} />
                <span>Reject</span>
              </button>

              <button 
                onClick={() => setSelectedComplaint(comp)}
                className="cursor-pointer flex items-center space-x-2 text-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-lg transition"
              >
                <Eye size={20} />
                <span>View</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Complaint Details Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] shadow-lg">
            <h2 className="text-xl font-bold mb-3">{selectedComplaint.name}</h2>
            <p><span className="font-semibold">Issue:</span> {selectedComplaint.issue}</p>
            <p><span className="font-semibold">Status:</span> {selectedComplaint.status}</p>
            <p><span className="font-semibold">Filed On:</span> {selectedComplaint.date}</p>
            <div className="mt-5 text-right">
              <button 
                onClick={() => setSelectedComplaint(null)} 
                className="cursor-pointer px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
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

export default Complaints;