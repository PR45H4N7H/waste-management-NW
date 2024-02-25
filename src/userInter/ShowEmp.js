import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function ShowEmp() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees data from the backend
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/employees');
      const data = await response.json();
      console.log('Fetched employees:', data);
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>LIST OF EMPLOYEES</h1>
        <div className="employee-container">
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <div className="employee" key={index}>
                <div className="employee-info">
                  <div>Username: {employee.username}</div>
                  <div>Password: {employee.password}</div>
                </div>
              </div>
            ))
          ) : (
            <p>No employees found</p>
          )}
        </div>

        <style>{`
          .container {
            padding: 20px;
          }
          h1 {
            color: black;
            margin-top: -290px;
            margin-bottom: 28px;
          }

          .employee-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .employee {
            height: 120px;
            width: 180px;
            margin-right: 26px;
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 5px;
            background: linear-gradient(to bottom, black, #00674C);
            color: black;
            font-weight: bold;
            transition: transform 0.3s ease;
          }

          .employee:hover {
            transform: scale(1.05);
            color: white !important;
          }

          .employee-info {
            font-size: 16px;
            margin-top: 10px;
          }
        `}</style>
      </div>
    </>
  );
}

export default ShowEmp;
