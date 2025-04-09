import Topbar from "./navbar";
// import TopNavbar from "./navbar";
import Sidebar from "./sidebar";
// import Top from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
