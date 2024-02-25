import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import Navbar from './Navbar';

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Fetch data from your backend API
        setData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // Process data and create charts
      createPieChart('typeWeightChart', 'Type vs Weight', processData(data, 'type', 'weight'));
      createPieChart('typeRevenueChart', 'Type vs Revenue', processData(data, 'type', 'revenue'));
      createLineChart('totalWeightsChart', 'Total Weights', processLineData(data, 'category', 'weight'));
      createLineChart('revenuePercentageChart', 'Revenue Percentage', processLineData(data, 'category', 'revenuePercentage'));
    }
  }, [data]);

  // Function to process data for pie charts
  const processData = (data, key1, key2) => {
    const processedData = data.reduce((acc, curr) => {
      if (!acc[curr[key1]]) {
        acc[curr[key1]] = 0;
      }
      acc[curr[key1]] += curr[key2];
      return acc;
    }, {});

    return {
      labels: Object.keys(processedData),
      datasets: [{
        data: Object.values(processedData),
        backgroundColor: Object.keys(processedData).map(colorMap),
      }]
    };
  };

  // Function to process data for line charts
  const processLineData = (data, key1, key2) => {
    const processedData = data.reduce((acc, curr) => {
      if (!acc[curr[key1]]) {
        acc[curr[key1]] = 0;
      }
      acc[curr[key1]] += curr[key2];
      return acc;
    }, {});

    return {
      labels: Object.keys(processedData),
      datasets: [{
        label: key2,
        data: Object.values(processedData),
        borderColor: 'blue',
        borderWidth: 1,
        fill: false
      }]
    };
  };

  // Function to create pie chart
  const createPieChart = (id, label, data) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: label
          }
        }
      }
    });
  };

  // Function to create line chart
  const createLineChart = (id, label, data) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: label
          }
        }
      }
    });
  };

  // Function to map colors
  const colorMap = (str) => {
    // Implement your color mapping logic here
    return 'rgb(0, 123, 255)';
  };

  return (
    <>
    <Navbar/>
    <div>
      <div>
        <canvas id="typeWeightChart" width="400" height="400"></canvas>
      </div>
      <div>
        <canvas id="typeRevenueChart" width="400" height="400"></canvas>
      </div>
      <div>
        <canvas id="totalWeightsChart" width="400" height="400"></canvas>
      </div>
      <div>
        <canvas id="revenuePercentageChart" width="400" height="400"></canvas>
      </div>
    </div>
    </>
  );
};

export default Stats;
