/*eslint-disable */
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import "./student.css";


function Student() {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className="std">
      <h1>Student Module</h1>
      <div className="drop-user">
      <div className="logoutButton" onClick={handleLogout}>
        Logout
      </div>
    </div>
    

      <div className="wrapper">
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1938826416/photo/businesswomen-analyze-opportunity-investment-with-a-digital-candlestick-chart-and-virtual-bar.jpg?s=612x612&w=0&k=20&c=TyZO-MwZcvvX8rWZv_ixmbQwme-2P16KOASFpgCTr0E="
            alt="Businesswomen analyzing opportunity"
          />
          <div className="info">
            <h1>Company Details</h1>
            <NavLink className="btn" to="/company">
              Click here
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1329493359/photo/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-desk-in-office-law-legal.jpg?s=612x612&w=0&k=20&c=9PX_rK08k_nxu3IPK8Tj_jny-Ci_l1gqxCUswD6Y3g8="
            alt="Business and lawyers discussing contract papers"
          />
          <div className="info">
            <h1>Apply Job</h1>
            <NavLink className="btn" to="/jobApplication">
              Click here
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1349094945/photo/human-using-a-computer-laptop-for-searching-for-job-and-fill-out-personal-data-on-job-website.jpg?s=612x612&w=0&k=20&c=nVCY302pin29eP1rN0eBGstQN3WF4YQTWvZ4TvAs21g="
            alt="Doctor visual screen software data management"
          />
          <div className="info">
            <h1>Placement Record</h1>
            <NavLink className="btn" to="/placementRecord">
              Click here
            </NavLink>
          </div>
        </div>

        <div className="card">
          <img
            src="https://media.istockphoto.com/id/1041512890/photo/hard-work-always-pays-off.jpg?s=612x612&w=0&k=20&c=m1rPEzQ26hMMHzpUl5cdELSvPXKKMTuVz95tMF23HgA="
            alt="Doctor visual screen software data management"
          />
          <div className="info">
            <h1>Download report</h1>
            <NavLink className="btn" to="/downloadRecord">
              Click here
            </NavLink>
          </div>
        </div>
      </div>
      <div className="horizontal">
        <div className="note">
          <h3>*NOTE : This is informing that to you this site is under  construction.</h3>
          
          </div>
      </div>
    </div>
    
  );
}


export default Student;
