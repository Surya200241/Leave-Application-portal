import React, { useState } from 'react';
import axios from 'axios';
import './LeaveForm.css'; 

const LeaveForm = () => {
  const [form, setForm] = useState({
    userId: 'user123',
    type: '',
    fromDate: '',
    toDate: '',
    reason: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/leaves', form);
    alert('Leave submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="type" placeholder="Leave Type" onChange={handleChange} />
      <input name="fromDate" type="date" onChange={handleChange} />
      <input name="toDate" type="date" onChange={handleChange} />
      <textarea name="reason" placeholder="Reason" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaveForm;