import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './style.css';
import logo from './logo.png';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/manager', {
        username,
        password,
      });
      console.log('Signup successful:', response.data);
      navigate('/manager');
    } catch (error) {
      console.error('Signup failed:', error);
      // Display toast for signup failure
      toast.error('Signup failed. Please try again.', {
        position: 'top-center',
      });
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="card">
        <img className="logo" src={logo} alt="Logo" />
        <h2>Manager Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">LogIn</button>
        </form>
      </div>
      <ToastContainer /> {/* ToastContainer for displaying toast notifications */}
    </div>
  );
}

export default SignUp;
