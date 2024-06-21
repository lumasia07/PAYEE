import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to display text in the center of the Doughnut chart
const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
        const { ctx, width, height } = chart;
        ctx.restore();
        const fontSize = (height / 250).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        const text = `Total: $${chart.options.plugins.centerText.totalSpend}`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
    }
};

const Dashboard = () => {
    const [spendChartData, setSpendChartData] = useState({});
    const [budgetData, setBudgetData] = useState(null);
    const [expenditureData, setExpenditureData] = useState(null);
    const [totalSpend, setTotalSpend] = useState(0);
    const [categoryBalances, setCategoryBalances] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/dashboard/expenditure')
            .then(response => response.json())
            .then(data => {
                setExpenditureData(data);
                setTotalSpend(data.total_spend);
            })
            .catch(error => console.error('Error fetching expenditure data:', error));

        fetch('http://127.0.0.1:5000/api/dashboard/budget')
            .then(response => response.json())
            .then(data => {
                setBudgetData(data);
            })
            .catch(error => console.error('Error fetching budget data:', error));
    }, []);

    useEffect(() => {
        if (budgetData && expenditureData) {
            const spendData = expenditureData.categories.map(cat => cat.amount);
            const budgetAmounts = budgetData.categories.map(cat => cat.amount);
            const backgroundColors = budgetData.categories.map((_, idx) => `hsl(${idx * 60}, 70%, 50%)`);

            // Ensure no spend exceeds the corresponding budget
            const adjustedSpendData = spendData.map((amount, idx) => Math.min(amount, budgetAmounts[idx]));

            setSpendChartData({
                labels: budgetData.categories.map(cat => cat.name),
                datasets: [
                    {
                        data: adjustedSpendData,
                        backgroundColor: backgroundColors
                    }
                ]
            });

            // Calculate category balances and total balance
            const balances = budgetData.categories.map((category, idx) => ({
                name: category.name,
                balance: budgetAmounts[idx] - spendData[idx]
            }));
            setCategoryBalances(balances);
            const totalBal = balances.reduce((acc, curr) => acc + curr.balance, 0);
            setTotalBalance(totalBal);
        }
    }, [budgetData, expenditureData]);

    return (
        <div className="min-h-screen flex flex-col items-start justify-start bg-gray-100 p-4">
            <div className='font-tour h-fit text-orange-500 font-bold'>My Dashboard</div>
            <div className="bg-white p-6 w-full rounded-lg shadow-lg flex flex-row items-start mt-10 space-x-10">   
                <div className="relative">
                    <h1 className='font-mons font-bold text-2xl mb-4'>My Total Spend</h1>
                    {spendChartData.datasets ? (
                        <Doughnut 
                            data={spendChartData} 
                            options={{ 
                                plugins: { 
                                    centerText: { totalSpend },
                                    legend: {
                                        display: false
                                    }
                                }
                            }} 
                            plugins={[centerTextPlugin]}
                        />
                    ) : (
                        <p className="text-center text-gray-500">Loading...</p>
                    )}
                </div>
                <div className="ml-6 flex flex-col justify-start">
                    <h2 className="text-xl font-semibold mt-7 ml-7">Categories</h2>
                    {spendChartData.labels && spendChartData.datasets ? (
                        <ul className="space-y-4 m-10">
                            {spendChartData.labels.map((label, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: spendChartData.datasets[0].backgroundColor[index] }}></div>
                                    <span className="font-bold text-lg" style={{ color: spendChartData.datasets[0].backgroundColor[index] }}>
                                        {label}
                                    </span>: <span className="text-lg">{spendChartData.datasets[0].data[index]}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No data available</p>
                    )}
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-10 w-full"> 
                <h1 className='font-mons font-bold text-2xl'>Monthly Budget</h1>
                {budgetData !== null ? (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">My Total Budget: ${budgetData.total_budget}</h2>
                        <ul className="space-y-4">
                            {budgetData.categories.map((category, index) => (
                                <li key={index} className="flex flex-col">
                                    <div className="flex items-center">
                                        <span className="font-bold text-lg">{category.name}</span>: <span className="text-lg">${category.amount}</span>
                                    </div>
                                    <div className="relative pt-1">
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style={{ width: `${(category.amount / budgetData.total_budget) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Loading...</p>
                )}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-10 w-full"> 
                <h1 className='font-mons font-bold text-2xl'>Monthly Balance</h1>
                {categoryBalances.length > 0 ? (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Total Balance: ${totalBalance}</h2>
                        <ul className="space-y-4">
                            {categoryBalances.map((category, index) => (
                                <li key={index} className="flex flex-col">
                                    <div className="flex items-center">
                                        <span className="font-bold text-lg">{category.name}</span>: <span className="text-lg">${category.balance}</span>
                                    </div>
                                    <div className="relative pt-1">
                                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style={{ width: `${(category.balance / budgetData.total_budget) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
