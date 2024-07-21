import React, { useState, useEffect } from "react";
import ForHireCSS from './ForHire.module.css';

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
    <div className={ForHireCSS.hireBody}>
      <h1>Currently Hiring</h1>
    <div className={ForHireCSS.tableContainer}>
      <table className={ForHireCSS.table}>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Package</th>
            <th>Profile</th>
            <th>No of candidate required</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td data-label="Company">{index + 1}.</td>
              <td data-label="Company">{company.companyName}</td>
              <td data-label="Company">{company.location}</td>
              <td data-label="Company">{company.package1}</td>
              <td data-label="Company">{company.profile}</td>
              <td data-label="Company">{company.numberOfCandidates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Company;