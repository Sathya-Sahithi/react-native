// client/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { getData } from '../services/dataService';
import Chart from 'chart.js';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
            // Initialize charts here
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Data Visualization Dashboard</h1>
            <div id="chartContainer">
                {/* Chart components will be rendered here */}
            </div>
        </div>
    );
};

export default Dashboard;
