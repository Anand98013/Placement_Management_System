import React, { useState, useEffect, useRef } from 'react';
import ViewDrive from './ViewDrive';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import ReportCSS from './Report.module.css'; // Import the CSS file

function FilteredData({ data }) {
  return (
    <div className={ReportCSS.table_container}>
      <h1 className={ReportCSS.heading}>Drive Record</h1> {/* Updated heading */}
      <table className={ReportCSS.table}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Passing Year</th>
            <th>Company Name</th>
            <th>Branch</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.studentName}</td>
              <td>{student.passingYear}</td>
              <td>{student.companyName}</td>
              <td>{student.branch}</td>
              <td>{student.package1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DownloadReport() {
  const PlacementRecordRef = useRef(null);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:9090/api/drives/');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterStudents(e.target.value);
  };

  const filterStudents = (searchTerm) => {
    const filteredStudents = students.filter((student) => {
      return (
        (student.studentName && student.studentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.passingYear && student.passingYear.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.companyName && student.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.branch && student.branch.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.package && student.package.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredData(filteredStudents);
  };

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(
      filteredData.map((student) => [
        student.studentName,
        student.passingYear,
        student.companyName,
        student.branch,
        student.package,
      ])
    );
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, 'students.xlsx');
  };

  return (
    <div className={ReportCSS.container}>
      <div className={ReportCSS.input_container}>
        <input
          type="text"
          placeholder="Search by name, year, company, branch, or package"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <button className={ReportCSS.download_button} onClick={downloadExcel}>
        Download Excel
      </button>
      {filteredData.length > 0 && <FilteredData data={filteredData} />}
      <div ref={PlacementRecordRef}>
        <ViewDrive />
      </div>
    </div>
  );
}

export default DownloadReport;
