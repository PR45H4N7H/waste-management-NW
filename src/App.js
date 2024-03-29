// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRouter from './routing/AppRouter';

function App() {
  return (
    <div className="App">
      <Router> {/* Wrap your entire application with the Router */}
      <ToastContainer />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;