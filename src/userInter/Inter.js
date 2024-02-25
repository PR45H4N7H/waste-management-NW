import React, { useState } from 'react';
import logo from './logo.png';
import './dataStyle.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inter() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  const handleAddIconClick = (event) => {
    event.preventDefault();
    setCategories(prevCategories => [...prevCategories, selectedCategory]);
    setSelectedCategory('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataToSend = categories.map(category => {
        return {
          category: category,
          subCategory: document.getElementById(`newCategory${category}`).value,
          weight: document.getElementById(`weight${category}`).value,
          date: document.getElementById(`date${category}`).value,
        };
      });
      const response = await axios.post('http://localhost:3001/api/saveData', dataToSend);
      console.log('Data saved successfully:', response.data);
      toast.success('Data saved successfully');
      setCategories([]);
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error('Error saving data');
    }
  };

  const renderNewCategoryFields = (categoryId) => {
    switch (categoryId) {
      case 'Waste Collection':
        return (
          <>
            <h3>Waste Collection</h3>
            <select id={`newCategory${categoryId}`}>
              <optgroup label="Cardboard">
                <option>Cardboard</option>
              </optgroup>
              <optgroup label="Glass">
                <option>Glass</option> 
              </optgroup>
              <optgroup label="Metal">
                <option>Aluminum</option>
                <option>Food Cans</option>
                <option>Scrap Metal</option>
              </optgroup>
              <optgroup label="Paper">
                <option>Mixed Paper</option>
                <option>NewsPaper</option>
                <option>White Office</option>
              </optgroup>
              <optgroup label="Plastic">
                <option>PET</option>
                <option>HDPE Colored</option>
                <option>HDPE Natural</option>
              </optgroup>
            </select>
            <input type="text" id={`weight${categoryId}`} placeholder="Weight" />
            <input type="date" id={`date${categoryId}`} placeholder="Date" />
          </>
        );
      case 'Recycling Revenue':
        return (
          <>
            <h3>Recycling Revenue</h3>
            <select id={`newCategory${categoryId}`}>
              <optgroup label="Cardboard">
                <option>Cardboard</option>
              </optgroup>
              <optgroup label="Glass">
                <option>Glass</option> 
              </optgroup>
              <optgroup label="Metal">
                <option>Aluminum</option>
                <option>Food Cans</option>
                <option>Scrap Metal</option>
              </optgroup>
              <optgroup label="Paper">
                <option>Mixed Paper</option>
                <option>NewsPaper</option>
                <option>White Office</option>
              </optgroup>
              <optgroup label="Plastic">
                <option>PET</option>
                <option>HDPE Colored</option>
                <option>HDPE Natural</option>
              </optgroup>
            </select>
            <input type="text" id={`type${categoryId}`} placeholder="Type" />
            <input type="text" id={`weight${categoryId}`} placeholder="Weight" />
            <input type="text" id={`buyerName${categoryId}`} placeholder="Buyer Name" />
            <input type="text" id={`revenue${categoryId}`} placeholder="Revenue $" />
            <input type="date" id={`date${categoryId}`} placeholder="Date" />
          </>
        );
      case 'LandFill Waste':
        return (
          <>
            <h3>LandFill Waste</h3>
            <select id={`newCategory${categoryId}`}>
              <optgroup label="Cardboard">
                <option>Cardboard</option>
              </optgroup>
            </select>
            <input type="text" id={`weight${categoryId}`} placeholder="Weight" />
            <input type="text" id={`landFillFee${categoryId}`} placeholder="LandFill Fee" />
            <input type="date" id={`date${categoryId}`} placeholder="Date" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Make sure ToastContainer is rendered at the root of your component */}
      <div className="background1"></div>
      <button id="LogOut" onClick={() => window.location.href = "/"}><span className="material-symbols-outlined">Logout</span></button>
      <div className="card1">
        <img className="logo" src={logo} alt="Logo" />
        <h2>Data Entry</h2>
        <form className="form1" onSubmit={handleSubmit}>
          <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
            <option disabled value="">Choose Category</option>
            <option value="Waste Collection">Waste Collection</option>
            <option value="Recycling Revenue">Recycling Revenue</option>
            <option value="LandFill Waste">LandFill Waste</option>
          </select>

          {categories.map((category, index) => (
            <div id="alpha" key={index}>
              {renderNewCategoryFields(category)}
            </div>
          ))}

          {selectedCategory && <button id="add" onClick={handleAddIconClick}>+</button>}
          {categories.length > 0 && <button type="submit">Submit</button>}
        </form>
      </div>
    </div>
  );
}

export default Inter;
