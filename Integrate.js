// client/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { getData } from '../services/dataService';
import Filters from './Filters';
import Chart from 'chart.js';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});

    const fetchData = async () => {
        const result = await getData(filters);
        setData(result);
        // Initialize charts here
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    const setFilter = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    return (
        <div>
            <h1>Data Visualization Dashboard</h1>
            <Filters setFilter={setFilter} />
            <div id="chartContainer">
                {/* Chart components will be rendered here */}
            </div>
        </div>
    );
};

export default Dashboard;
