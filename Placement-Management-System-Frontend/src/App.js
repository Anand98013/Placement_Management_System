import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Portfolio from "./Component/Portfolio";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Register from "./Component/Register";
import "./css/login.css";
import Logout from './Component/Logout';

import Admin from "./Component/Admin/admin";
import AdminCompanyDetail from "./Component/Admin/CompanyDetails";
import AdminForHire from "./Component/Admin/ForHire";
import AdminPlacementDrive from "./Component/Admin/PlacementDrive";
import AdminReport from "./Component/Admin/Report";
import AdminBulkMSg from "./Component/Admin/BulkSms";
import AddDrive from "./Component/Admin/Adddrive";
import ViewDrive from "./Component/Admin/ViewDrive";
 

import Student from "./Component/Student/student";
import JobApplication from "./Component/Student/JobApplication"
import PlacemetRecord from "./Component/Student/PlacementRecord"
import DownloadRecord from "./Component/Student/DownloadRecord"

import Company from "./Component/Student/Company";
// import Coordinator from "./Component/Coordinator/coordinator";
import Faculty from "./Component/Faculty/Teacher";
import Company1 from "./Component/Faculty/CompanyView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './Component/AuthContext';
// import ProtectedRoute from './Component/PrivateRoute'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
                <About />
                <Service />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Admin */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/companyDetails" element={<AdminCompanyDetail />} />
          <Route path="/placementDrive" element={<AdminPlacementDrive />} />
          <Route path="/forHire" element={<AdminForHire />} />
          <Route path="/report" element={<AdminReport />} />
          <Route path="/bulkSms" element={<AdminBulkMSg />} />
          <Route path="/adddrive" element={<AddDrive />} />
          <Route path="/viewdrive" element={<ViewDrive />} />

          <Route path="/student" element={<Student />} />
          <Route path="/jobApplication" element={<JobApplication />} />
          <Route path="/placementRecord" element={<PlacemetRecord />} />
          <Route path="/downloadRecord" element={<DownloadRecord />} />
          <Route path="/company" element={<Company />} />

          {/* <Route path="/coordinator" element={<Coordinator />} />  */}
          {/* <Route path="/faculty" element={<ProtectedRoute element={<Faculty />} />} />  */}
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/company1" element={<Company1 />} />
        </Routes>
        <ToastContainer /> 
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
