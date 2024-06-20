import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/dashboard/expenditure')
            .then(response => response.json())
            .then(data => {
                setChartData(data);
            })
            .catch(error => console.error('Error fetching the data:', error));
    }, []);

    return (
        <div className="min-h-screen flex items-start justify-start bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-row items-start">
                <div className="w-80 h-50">
                  <h1 className='font-mons font-bold text-2xl'>Monthly spend</h1>
                    {chartData.datasets ? (
                        <Doughnut data={chartData} />
                    ) : (
                        <p className="text-center text-gray-500">Loading...</p>
                    )}
                </div>
                <div className="ml-6 flex flex-col justify-start">
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    {chartData.labels && chartData.datasets ? (
                        <ul className="space-y-4">
                            {chartData.labels.map((label, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></div>
                                    <span className="font-bold text-lg" style={{ color: chartData.datasets[0].backgroundColor[index] }}>
                                        {label}
                                    </span>: <span className="text-lg">{chartData.datasets[0].data[index]}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No data available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
