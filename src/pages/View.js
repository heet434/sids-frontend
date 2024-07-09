import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import CsvDownloadButton from 'react-json-to-csv';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './View.css';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function View() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedColumn1, setSelectedColumn1] = useState('');
  const [selectedColumn2, setSelectedColumn2] = useState('');
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${BACKEND_URL}/patients`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust as needed based on how you store your token
        }
    })
    .then(response => {
        const newData = response.data.map(item => {
            delete item._id;
            delete item.__v;
            Object.keys(item).forEach(key => {
                if (item[key] === '') {
                    item[key] = null;
                }
            });
            return item;
        });
        setData(newData);
        if (newData.length > 0) {
            setColumns(Object.keys(newData[0]));
        }
    })
    .catch(error => {
        if (error.response && error.response.status === 401 && error.response.data.error === 'Token expired') {
            alert('Session expired. Please log in again.');
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            window.location.href = '/'; // Assuming '/' is your login page route
        } else {
            alert('Error fetching data, some issue with the server.');
            console.log(error);
        }
    });
};

  useEffect(() => {
    if (selectedColumn1 && selectedColumn2) {
      const labels = data.map(item => item[selectedColumn1]);
      const values = data.map(item => item[selectedColumn2]);
      setChartData({
        labels,
        datasets: [
          {
            label: `${selectedColumn1} vs ${selectedColumn2}`,
            data: values,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          }
        ]
      });
    }
  }, [selectedColumn1, selectedColumn2, data]);

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: selectedColumn1 || 'X Axis',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 20
        }
      },
      y: {
        title: {
          display: true,
          text: selectedColumn2 || 'Y Axis',
        },
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="page" id='view'>
      <div className='section-title-view'>
        <h1>View</h1>
      </div>
      <CsvDownloadButton data={data} filename='sidsData.csv' className='download-button' />
      <div className='chart-section'>
        <h2>Select Columns to View Relationship</h2>
        <select
          className='dropdown'
          value={selectedColumn1}
          onChange={(e) => setSelectedColumn1(e.target.value)}
        >
          <option value=''>Select Column 1</option>
          {columns.map((col, idx) => (
            <option key={idx} value={col}>{col}</option>
          ))}
        </select>
        <select
          className='dropdown'
          value={selectedColumn2}
          onChange={(e) => setSelectedColumn2(e.target.value)}
        >
          <option value=''>Select Column 2</option>
          {columns.map((col, idx) => (
            <option key={idx} value={col}>{col}</option>
          ))}
        </select>
        <div className='chart-container'>
          {selectedColumn1 && selectedColumn2 && chartData.labels && (
            <Bar data={chartData} options={chartOptions} />
          )}
        </div>
      </div>
    </div>
  );
}

export default View;