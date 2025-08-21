import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeaveStatus.css'; // Assuming you have a CSS file for styling

const LeaveStatus = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leaves/user123')
      .then(res => setLeaves(res.data));
  }, []);

  return (
    <div>
      <h2>Your Leave Requests</h2>
      <ul>
        {leaves.map(leave => (
          <li key={leave._id}>
            {leave.type} | {leave.fromDate.slice(0,10)} to {leave.toDate.slice(0,10)} | {leave.status}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default LeaveStatus;