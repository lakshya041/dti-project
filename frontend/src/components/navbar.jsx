import { Bell, Search, UserCircle } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6 shadow-md">

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md outline-none"
        />
        <Search size={18} className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        <Bell size={24} className="text-gray-300 cursor-pointer hover:text-white" />
        <div className="flex items-center gap-2">
          <UserCircle size={28} className="text-gray-300" />
          <span className="text-gray-300">Admin</span>
        </div>
      </div>

    </div>
  );
};

export default Topbar;
