import { useEffect } from "react";
import Topbar from "./navbar";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if(document.cookie==""){
      navigate("/Login")
    }

  },[])
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
