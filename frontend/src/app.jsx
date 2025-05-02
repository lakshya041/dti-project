import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ApplicationDashboard from "./employer/pages/applications/ApplicationDashboard";
import FAQSection from "./employer/pages/faq";
import Settings from "./employer/pages/settings/InputDesign";
import Home from "./employer/pages/home";
import AuthForm from "./employer/pages/Login";
import DashboardPage from "./employer/pages/dashboard/DashboardPage";
import ManageDashboard from "./employer/pages/manage/ApplicationDashboard";
import ReportsDashboard from "./employer/pages/reports/FAQDashboard";
import EmployeeDashboardPage from "./employee/dashboard/EmployeeDashboardPage";
import EmployeeManageDashboard from "./employee/apply/ApplicationDashboard";
import EmployeeReportsDashboard from "./employee/reports/FAQDashboard";
import EmployeeFAQSection from "./employee/faq/FAQSection";
import EmployeeSettingsPage from "./employee/settings/InputDesign";
import ApplyJobsPage from "./employee/applications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/auth" element={<AuthForm/>} />
        <Route path="/employer/" element={<Layout><DashboardPage /></Layout>} />
        <Route path="/employer/applications" element={<Layout><ApplicationDashboard /></Layout>} />
        <Route path="/employer/manage" element={<Layout><ManageDashboard /></Layout>} />
        <Route path="/employer/reports" element={<Layout><ReportsDashboard /></Layout>} />
        <Route path="/employer/faq" element={<Layout><FAQSection /></Layout>} />
        <Route path="/employer/settings" element={<Layout><Settings /></Layout>} />

        <Route path="/employee/home" element={<Home/>} />
        <Route path="/employee/Login" element={<AuthForm/>} />
        <Route path="/employee/" element={<Layout><EmployeeDashboardPage /></Layout>} />
        <Route path="/employee/applications" element={<Layout><ApplyJobsPage /></Layout>} />
        <Route path="/employee/manage" element={<Layout><EmployeeManageDashboard /></Layout>} />
        <Route path="/employee/reports" element={<Layout><EmployeeReportsDashboard /></Layout>} />
        <Route path="/employee/faq" element={<Layout><EmployeeFAQSection /></Layout>} />
        <Route path="/employee/settings" element={<Layout><EmployeeSettingsPage /></Layout>} />

      </Routes>
    </Router>
  );
}

export default App;
