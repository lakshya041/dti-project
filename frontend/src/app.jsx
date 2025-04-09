import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Applications from "./pages/applications";
import ReportsAndAnalysis from "./pages/reports";
import Requests from "./pages/requests";
import Complaints from "./pages/complaints";
import Settings from "./pages/settings";
import Home from "./pages/home";
import AuthForm from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<AuthForm/>} />
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/applications" element={<Layout><Applications /></Layout>} />
        <Route path="/complaints" element={<Layout><Complaints /></Layout>} />
        <Route path="/reports" element={<Layout><ReportsAndAnalysis /></Layout>} />
        <Route path="/qna" element={<Layout><Requests /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
