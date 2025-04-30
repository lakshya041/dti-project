import { Bell, Search, UserCircle } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full h-[73px] bg-[#10141f] text-white flex items-center justify-between px-6 shadow-md border-b border-gray-700">

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 bg-[#1c2230] text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <Search
          size={18}
          className="absolute left-3 top-2.5 text-gray-400 pointer-events-none"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6">
        <button className="hover:bg-[#1c2230] p-2 rounded-full transition">
          <Bell size={22} className="text-gray-300 hover:text-white" />
        </button>
        <div className="flex items-center gap-2 hover:bg-[#1c2230] px-3 py-1.5 rounded-lg transition cursor-pointer">
          <UserCircle size={26} className="text-gray-300" />
          <span className="text-gray-300 font-medium">Admin</span>
        </div>
      </div>

    </div>
  );
};

export default Topbar;