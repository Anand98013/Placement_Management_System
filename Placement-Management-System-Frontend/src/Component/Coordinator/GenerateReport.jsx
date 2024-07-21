import React, { useState } from 'react';
import axios from 'axios';
import './Generate.css';

const GenerateReport = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      await axios.post('http://localhost:9090/api/notes/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div className="gr-container">
      <h2 className="gr-h2">Generate Report</h2>
      <form className="gr-form" onSubmit={handleSubmit}>
        <div>
          <label className="gr-label">Title:</label>
          <input type="text" className="gr-input-text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label className="gr-label">Choose Excel File:</label>
          <input type="file" className="gr-input-file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileChange} />
        </div>
        <button type="submit" className="gr-button-submit">Upload</button>
      </form>
    </div>
  );
};

export default GenerateReport;
