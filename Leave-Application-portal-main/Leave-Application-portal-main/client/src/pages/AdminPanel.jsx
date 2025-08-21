import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css'; // Assuming you have a CSS file for styling

const AdminPanel = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leaves/user123') // Replace with admin logic
      .then(res => setLeaves(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/leaves/${id}`, { status });
    setLeaves(prev => prev.map(l => l._id === id ? { ...l, status } : l));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {leaves.map(leave => (
        <div key={leave._id}>
          <p>{leave.type} | {leave.reason}</p>
          <button onClick={() => updateStatus(leave._id, 'Approved')}>Approve</button>
          <button onClick={() => updateStatus(leave._id, 'Rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;