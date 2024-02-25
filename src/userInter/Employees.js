import React, { useState } from 'react';
import './Employees.css';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Employees() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    try {
      const response = await fetch('http://localhost:3001/api/createEmployee', { // Update the URL to point to the backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Send username and password to the backend
      });

      // Check if response is JSON, if not, throw an error
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response from server');
      }

      const data = await response.json();
      console.log(data); // Log response from the backend
      // Show success toast
      toast.success('Employee created successfully');
    } catch (error) {
      console.error('Error:', error);
      // Show error toast
      toast.error('Failed to create employee');
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="login-box">
        <h2>Create Employee</h2>
        <form>
          <div className="user-box">
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>Password</label>
          </div>
          <a href="#" onClick={handleSubmit}> {/* Add onClick event to invoke handleSubmit */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <a href="showEmp">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Show Emp
          </a>
        </form>
      </div>
    </>
  );
}

export default Employees;
