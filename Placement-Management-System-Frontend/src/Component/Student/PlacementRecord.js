// PlacementRecord.js
import React, { useState, useEffect } from "react";
import styles from "./PlacementRecord.module.css";

function PlacementRecord() {
  const [driveRecords, setDriveRecords] = useState([]);

  useEffect(() => {
    fetchDriveRecords();
  }, []);

  const fetchDriveRecords = async () => {
    try {
      console.log("Fetching drive records...");
      const response = await fetch("http://localhost:9090/api/drives/");
      console.log("Response:", response);
      const data = await response.json();
      console.log("Data:", data);
      setDriveRecords(data);
    } catch (error) {
      console.log("Error fetching drive records:", error);
    }
  };

  return (
    <div className={styles.recordBody}>
      <h1>Placement Record</h1>
      <div className={styles.container}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Student Name</th>
                <th>Branch</th>
                <th>Company</th>
                <th>Package</th>
                <th>Passing Year</th>
              </tr>
            </thead>
            <tbody>
              {driveRecords.map((driveRecord, index) => (
                <tr key={index}>
                  <td data-label="Sl. No">{index + 1}.</td>
                  <td data-label="Student Name">{driveRecord.studentName}</td>
                  <td data-label="Branch">{driveRecord.branch}</td>
                  <td data-label="Company">{driveRecord.companyName}</td>
                  <td data-label="Package">{driveRecord.package1}</td>
                  <td data-label="Placement Date">{driveRecord.passingYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlacementRecord;
