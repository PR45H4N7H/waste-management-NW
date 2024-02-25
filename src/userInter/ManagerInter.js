import React from 'react';
import './dataStyle.css'; // Import your CSS file
import Navbar from './Navbar';

function ManagerInter() {
  const alpha = {
    padding: '20px',
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '18px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid black',
    borderRadius: '9px',
    height: '320px',
    width: '820px',
  };

  const beta = {
    fontSize: '28px',
    color: getGreetingColor(), // Dynamically set the color of the greeting text
  };

  const listStyles = {
    listStyleType: 'disc', // Set list style to disc (bullets)
    marginLeft: '20px', // Add left margin to the list items
    marginTop: '10px', // Add top margin to the list
  };

  // Function to get the time of day and return the appropriate greeting
  function getGreeting() {
    const currentTime = new Date().getHours();
    let greeting = '';
    if (currentTime >= 5 && currentTime < 12) {
      greeting = 'Good Morning 🌅';
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = 'Good Afternoon ☀️';
    } else {
      greeting = 'Good Evening 🌆';
    }
    return greeting;
  }

  // Function to get the color of the greeting text based on the time of day
  function getGreetingColor() {
    const currentTime = new Date().getHours();
    let color = '';
    if (currentTime >= 5 && currentTime < 12) {
      color = '#FDB813'; // Morning sun color
    } else if (currentTime >= 12 && currentTime < 18) {
      color = '#FFA500'; // Afternoon sun color
    } else if (currentTime >= 18 && currentTime < 21) {
      color = '#FF4500'; // Sunset color
    } else {
      color = '#800080'; // Purple color for night
    }
    return color;
  }

  return (
    <div>
      <Navbar />
      <div className="background"></div>

      <div style={alpha}>
        <p style={beta}>{getGreeting()}, Manager</p>
        <ul style={listStyles}>
          <li>You can navigate through the navbar.</li>
          <li>You can create employees.</li>
          <li>You can look at the summary report in the Home tab.</li>
          <li>You can view the statistics in the Statistics tab.</li>
          <li>Bored? Hit Logout.</li>
        </ul>
      </div>
    </div>
  );
}

export default ManagerInter;
