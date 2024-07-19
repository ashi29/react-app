import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import ForgotPassword from "./Screens/Auth/ForgotPassword";
import ResetPassword from "./Screens/Auth/ResetPassword";
import Landing from "./Screens/LandingPage/Landing";
import Register from "./Screens/Auth/Register";
import WaitingScreen from "./Screens/Auth/WaitingScreen";
import AddClient from "./Screens/SuperAdmin/Client/AddClient";
import Dashboard from "./Screens/SuperAdmin/Dashboard";
import Invoice from "./Screens/SuperAdmin/Invoice";
import Clients from "./Screens/SuperAdmin/Client/Clients";
import ClientDetail from "./Screens/SuperAdmin/Client/ClientDetail";
import AddProject from "./Screens/SuperAdmin/Project/AddProject";
import Projects from "./Screens/SuperAdmin/Project/Projects";
import ProjectDetail from "./Screens/SuperAdmin/Project/ProjectDetails";
import AssignVendor from "./Screens/SuperAdmin/Project/AssignVendor";
// import VendorRFQ from "./Screens/SuperAdmin/Project/VendorRFQ";
import AddVendor from "./Screens/SuperAdmin/Vendor/AddVendor";
import Vendors from "./Screens/SuperAdmin/Vendor/Vendors";
import VendorDetail from "./Screens/SuperAdmin/Vendor/VendorDetail";
import Profile from "./Screens/SuperAdmin/Profile";

const WithoutTokenRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* without token */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/waiting-screen" element={<WaitingScreen />} />
        <Route exact path="/" element={<Landing />} />
        {/* with token */}
        <Route exact path="/add-project" element={<AddProject />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/vendors" element={<Vendors />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/assignVendor/:id" element={<AssignVendor />} />
        <Route exact path="/invoice" element={<Invoice />} />
        <Route exact path="/add-client" element={<AddClient />} />
        <Route exact path="/add-vendor" element={<AddVendor />} />
        <Route exact path="/client/:id" element={<ClientDetail />} />
        <Route exact path="/project/:id" element={<ProjectDetail />} />
        <Route exact path="/vendor/:id" element={<VendorDetail />} />
        {/* <Route exact path="/vendorRFQ" element={<VendorRFQ />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default WithoutTokenRoutes;
