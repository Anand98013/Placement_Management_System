import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import "./Studentdatabase.css";

const StudentDatabase = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/students/");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    if (searchTerm.startsWith('<')) {
      const value = parseFloat(searchTerm.slice(1));
      return student.tenthPercentage < value || student.twelfthPercentage < value;
    } else if (searchTerm.startsWith('>')) {
      const value = parseFloat(searchTerm.slice(1));
      return student.tenthPercentage > value || student.twelfthPercentage > value;
    } else {
      const values = Object.values(student).join(' ').toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    }
  });

  
  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(
      filteredStudents.map(student => [
        student.firstName,
        student.lastName,
        student.email,
        student.jobRole,
        student.address,
        student.city,
        student.pincode,
      ])
    );
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'students.xlsx');
  };
  
  

  return (
    <div className="student-database-container">
      <h2>Student List</h2>
      <input
        type="text"
        placeholder="Search by name, email, job role, or use < or > followed by a number"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="download-button" onClick={downloadExcel}>Download Excel</button>
      <table className="student-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Role</th>
            {/* <th>10th Percentage</th> */}
            {/* <th>12th Percentage</th> */}
            <th>Address</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.jobRole}</td>
              {/* <td>{student.tenthPercentage}</td> */}
              {/* <td>{student.twelfthPercentage}</td> */}
              <td>{student.address}</td>
              <td>{student.city}</td>
              <td>{student.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDatabase;
