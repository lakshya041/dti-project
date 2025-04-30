import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Applications from "./pages/applications";
import ApplicationDashboard from "./pages/applications/ApplicationDashboard";
import ReportsAndAnalysis from "./pages/reports";
import FAQSection from "./pages/faq";
import Complaints from "./pages/complaints";
import Settings from "./pages/settings/InputDesign";
import Home from "./pages/home";
import AuthForm from "./pages/Login";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ManageDashboard from "./pages/manage/ApplicationDashboard";
import ReportsDashboard from "./pages/reports/FAQDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<AuthForm/>} />
        <Route path="/" element={<Layout><DashboardPage /></Layout>} />
        <Route path="/applications" element={<Layout><ApplicationDashboard /></Layout>} />
        <Route path="/manage" element={<Layout><ManageDashboard /></Layout>} />
        <Route path="/reports" element={<Layout><ReportsDashboard /></Layout>} />
        <Route path="/faq" element={<Layout><FAQSection /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
