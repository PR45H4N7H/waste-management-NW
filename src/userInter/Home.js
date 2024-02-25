import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './dataStyle.css';
import { FaSearch } from 'react-icons/fa'; // Import magnifier icon from react-icons library

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredData = data.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.weight.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const tableStyles = {
    borderCollapse: 'collapse',
    width: '210%', 
    margin: '0 auto',
    marginLeft: '-55%', 
  };

  const thStyles = {
    border: '2px solid white',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#000', 
    color: 'white'
  };

  const tdStyles = {
    border: '2px solid white',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#00674C',
    color: 'white'
  };

  const Headr = {
    position: 'relative',
    top: '-98px', 
    color: 'black',
    fontWeight: 'bold',
    fontSize: '36px',
    letterSpacing: '4px',
    left: '-23px'
  };

  const searchBarStyles = {
    width: '70%', 
    margin: '20px auto', 
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #000',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s, box-shadow 0.3s', // Add transition effect for hover
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', // Add subtle box shadow
  };

  const iconStyles = {
    marginRight: '10px',
    color: '#000' 
  };

  const inputStyles = {
    width: '100%', 
    border: 'none', 
    outline: 'none', 
    fontSize: '16px',
    backgroundColor: 'transparent', // Make input background transparent
  };

  // Add hover effect for the search bar
  const searchBarHoverStyles = {
    backgroundColor: '#f5f5f5', // Change background color on hover
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add stronger box shadow on hover
  };

  return (
    <div>
      <Navbar />
      <h2 style={Headr}>SUMMARY TABLE</h2>
      <div 
        style={{...searchBarStyles, ...(searchTerm && searchBarHoverStyles)}} // Apply hover styles when search term is present
      >
        <FaSearch style={iconStyles} />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={inputStyles}
        />
      </div>
      <table style={tableStyles} className="striped-table">
        <thead>
          <tr>
            <th style={thStyles}>Category</th>
            <th style={thStyles}>Subcategory</th>
            <th style={thStyles}>Weight</th>
            <th style={thStyles}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td style={tdStyles}>{item.category}</td>
              <td style={tdStyles}>{item.subCategory}</td>
              <td style={tdStyles}>{item.weight}</td>
              <td style={tdStyles}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
