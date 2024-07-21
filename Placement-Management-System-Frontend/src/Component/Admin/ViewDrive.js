import React, { useState, useEffect } from "react";
import './ForHire.module.css';

function DriveRecords() {
  const [driveRecords, setDriveRecords] = useState([]);

  useEffect(() => {
    fetchDriveRecords();
  }, []);

  const fetchDriveRecords = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/drives/");
      const data = await response.json();
      setDriveRecords(data);
    } catch (error) {
      console.log("Error fetching drive records:", error);
    }
  };

  return (
    <div className="table-container">
      <h1 className="heading">Drive Records</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Student Name</th>
            <th>Passing Year</th>
            <th>Company Name</th>
            <th>Branch</th>
            <th>Package (LPA)</th>
          </tr>
        </thead>
        <tbody>
          {driveRecords.map((driveRecord, index) => (
            <tr key={index}>
              <td data-label="Drive Record">{index + 1}.</td>
              <td data-label="Drive Record">{driveRecord.studentName}</td>
              <td data-label="Drive Record">{driveRecord.passingYear}</td>
              <td data-label="Drive Record">{driveRecord.companyName}</td>
              <td data-label="Drive Record">{driveRecord.branch}</td>
              <td data-label="Drive Record">{driveRecord.package1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriveRecords;