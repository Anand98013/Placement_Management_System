import React, { useState, useEffect } from "react";
import CompanyCSS from "./Company.module.css";

function Company() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/companys/");
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.log("Error fetching companies:", error);
    }
  };

  return (
    <div className={CompanyCSS.companyBody}>
       <h1>Company Details</h1>
       <div className={CompanyCSS.tableContainer}>
       <table className={CompanyCSS.table}>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Package</th>
            <th>Profile</th>
            <th>No of candidates required</th>
            {/* <th>Apply form here</th> */}
          </tr>
        </thead>
        <tbody>
          
          {companies.map((company, index) => (
            <tr key={index}>
              <td data-label="Sl. No">{index + 1}.</td>
              <td data-label="Company Name">{company.companyName}</td>
              <td data-label="Location">{company.location}</td>
              <td data-label="Package">{company.package1}</td>
              <td data-label="Profile">{company.profile}</td>
              <td data-label="No of candidates required">{company.numberOfCandidates}</td>
              {/* <td data-label="Apply form">
                <a href="/jobApplication" className={CompanyCSS.btn}>
                  Apply Now
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
}

export default Company;