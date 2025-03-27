import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.jsx'
// import Login from "./components/Login.jsx";
// import LoginPage from "./login.jsx";
import AuthForm from "./components/Login.jsx";
import RegistrationForm from "./newpage.jsx";
import AdminDashboard from "./admin.jsx";

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>

      <Route index element={<Home/>} />
      <Route path="/login" element={<AuthForm/>}/>
      <Route path="/newpage" element={<RegistrationForm/>}/>

      <Route path="/admin" element={<AdminDashboard/>}/>

    </Routes>


  </BrowserRouter>



)
