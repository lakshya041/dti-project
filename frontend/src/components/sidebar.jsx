import React, { useEffect } from 'react';
import { Home, Ticket, Repeat, Wrench, User, Settings, LogOut, FileText, AlertCircle, BarChart2 } from 'lucide-react';
function Sidebar() {
  const employerMenuItems = [
    { href: '/employer/', label: 'Dashboard', icon: <Home size={18} /> },
    { href: '/employer/applications', label: 'Applications', icon: <FileText size={18} /> },
    { href: '/employer/manage', label: 'Manage', icon: <Wrench size={18} /> }, // Replace Complaints
    { href: '/employer/reports', label: 'Reports', icon: <BarChart2 size={18} /> }, // Replace Reports
    { href: '/employer/faq', label: "FAQ's", icon: <User size={18} /> },
    { href: '/employer/settings', label: 'Settings', icon: <Settings size={18} /> },
];

    const employeeMenuItems = [
        { href: '/employee/', label: 'Dashboard', icon: <Home size={18} /> },
        { href: '/employee/applications', label: 'My applications', icon: <FileText size={18} /> },
        { href: '/employee/manage', label: 'Apply', icon: <Wrench size={18} /> }, // Replace Complaints
        { href: '/employee/reports', label: 'Reports', icon: <BarChart2 size={18} /> }, // Replace Reports
        { href: '/employee/faq', label: "FAQ's", icon: <User size={18} /> },
        { href: '/employee/settings', label: 'Settings', icon: <Settings size={18} /> },
    ];

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/auth';
        }
    }
    , []);

    return (
        <div className="w-64 h-screen bg-[#10141f] text-white flex flex-col shadow-lg">
            <div className="text-2xl font-bold text-center py-5 border-b border-r border-gray-700 tracking-wide">
                Just Employed
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {localStorage.getItem('role') === 'employer' ? employerMenuItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#1c2230] transition duration-200"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </a>
                )) : employeeMenuItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#1c2230] transition duration-200"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </a>
                ))}
                
            </nav>
            <div className="p-4 border-t border-gray-700">
                <a
                    onClick={() => {
                        localStorage.removeItem('role');
                        localStorage.removeItem('token');
                        window.location.href = '/auth';
                    }}
                    className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-medium transition"
                >
                    <LogOut size={18} />
                    Logout
                </a>
            </div>
        </div>
    );
}

export default Sidebar;