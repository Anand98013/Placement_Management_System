import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListNotes = () => {
  const [notes, setNotes] = useState([]);
  const [excelUrls, setExcelUrls] = useState({});
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/notes/all');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const openNoteAsExcel = async (noteId) => {
    try {
      const response = await axios.get(`http://localhost:9090/api/notes/${noteId}`, {
        responseType: 'blob' // Ensure response is treated as a binary blob
      });

      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
      setExcelUrls({ ...excelUrls, [noteId]: url });

      setSelectedNoteId(noteId);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };

  const downloadExcel = (noteId) => {
    const excelUrl = excelUrls[noteId];
    if (excelUrl) {
      const link = document.createElement('a');
      link.href = excelUrl;
      link.setAttribute('download', `note_${noteId}.xlsx`);
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div>
      <h2>List of Uploaded Reports</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title}
            <button onClick={() => openNoteAsExcel(note.id)}>View Report</button>
            <button onClick={() => downloadExcel(note.id)}>Download Report</button>
          </li>
        ))}
      </ul>
      {selectedNoteId && (
        <div>
          <h3>Report Preview</h3>
          <iframe src={excelUrls[selectedNoteId]} style={{ width: '100%', height: '500px' }} title="Excel Preview" />
        </div>
      )}
    </div>
  );
};

export default ListNotes;
