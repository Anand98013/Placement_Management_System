import React, { useState, useEffect, useRef } from 'react';
import DownloadRecordCSS from './DownloadRecord.module.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function DownloadRecord() {
  const [driveRecords, setDriveRecords] = useState([]);
  const tableRef = useRef(null);

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

  const downloadPlacementRecord = () => {
    try {
      const table = tableRef.current;
      html2canvas(table).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const imgWidth = 190; // max width for A4 size paper
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const doc = new jsPDF('p', 'mm', 'a4');
        doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        doc.save('placement_record.pdf');
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className={DownloadRecordCSS.container}>
      <h1 className={DownloadRecordCSS.heading}>Placement Record</h1>
      <table className={DownloadRecordCSS.table} ref={tableRef}>
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
      <button className={DownloadRecordCSS.button} onClick={downloadPlacementRecord}>Download Placement Record</button>
    </div>
  );
}

export default DownloadRecord;
