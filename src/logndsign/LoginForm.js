import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './style.css';
import logo from './logo.png';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      navigate('/data');
    } catch (error) {
      console.error('Login failed:', error);
      // Display toast for incorrect credentials
      toast.error('Incorrect credentials', {
        position: 'top-center',
      });
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="card">
        <img className="logo" src={logo} alt="Logo" />
        <h2>Employee Login</h2>
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
        <footer>
          Are you a Manager? Login <a href="/SignUp">here</a>
        </footer>
      </div>
      <ToastContainer /> {/* ToastContainer for displaying toast notifications */}
    </div>
  );
}

export default LoginForm;
