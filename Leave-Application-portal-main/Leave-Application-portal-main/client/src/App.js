import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeaveForm from './pages/LeaveForm';
import LeaveStatus from './pages/LeaveStatus';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeaveForm />} />
        <Route path="/status" element={<LeaveStatus />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;