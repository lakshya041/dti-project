import { Link } from "react-router-dom";
import { 
  LayoutDashboard, Briefcase, BarChart, MessageCircleWarning, HelpCircle, Settings, LogOut 
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-5 shadow-lg">
      
      {/* Logo Section */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 text-green-400">
          <Briefcase size={28} /> Just Employed
        </h2>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-2">
          <SidebarItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <SidebarItem to="/applications" icon={<Briefcase size={20} />} label="Applications" />
          <SidebarItem to="/reports" icon={<BarChart size={20} />} label="Reports & Analytics" />
          <SidebarItem to="/complaints" icon={<MessageCircleWarning size={20} />} label="Complaints" />
          <SidebarItem to="/qna" icon={<HelpCircle size={20} />} label="Q&A" />
          <SidebarItem to="/settings" icon={<Settings size={20} />} label="Settings" />
        </nav>
      </div>

      {/* Logout Button */}
      <SidebarItem to="/logout" icon={<LogOut size={20} className="text-red-400" />} label="Logout" textClass="text-red-400" />
    </div>
  );
};

const SidebarItem = ({ to, icon, label, textClass = "text-gray-300" }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-700 transition ${textClass}`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Sidebar;
