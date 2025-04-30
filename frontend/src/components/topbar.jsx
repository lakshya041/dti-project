import { Bell, Search, UserCircle } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full h-[73px] bg-[#10141f] text-white flex items-center justify-end px-6 shadow-md border-b border-gray-700">
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