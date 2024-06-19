import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const [spendBalance, setSpendBalance] = useState({ spend: 0, balance: 0, budget: 0 });
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [expenditureData, setExpenditureData] = useState({
    labels: ['Rent', 'Food', 'Transport', 'Entertainment', 'Others'],
    datasets: [
      {
        data: [300, 50, 100, 40, 10], // Example data, replace with actual expenditure data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const spendBalanceResponse = await fetch('http://127.0.0.1:5000/api/spend_balance', {
          method: 'GET',
          headers: {  // Adjust this as per your auth logic
            'Content-Type': 'application/json'
          }
        });
        const spendBalanceData = await spendBalanceResponse.json();
        setSpendBalance(spendBalanceData);

        const productsResponse = await fetch('http://127.0.0.1:5000/api/products');
        const productsData = await productsResponse.json();
        setProducts(productsData);

        // Fetch expenditure data
        const expenditureResponse = await fetch('http://127.0.0.1:5000/api/expenditure');
        const expenditureData = await expenditureResponse.json();
        setExpenditureData({
          labels: expenditureData.labels,
          datasets: [
            {
              data: expenditureData.values,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            }
          ]
        });

      } catch (error) {
        setMessage('Failed to fetch data: ' + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
        
        {message && <p className="text-red-500 text-center mb-4">{message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Monthly Spend</h2>
            <p className="text-lg mb-4">Total Spend: {spendBalance.spend}</p>
            <Pie data={expenditureData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md sm:h-fit">
            <h2 className="text-2xl font-semibold mb-2">Monthly Budget</h2>
            <p className="text-lg">{spendBalance.budget}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md sm:h-fit">
            <h2 className="text-2xl font-semibold mb-2">Balance</h2>
            <p className="text-lg">{spendBalance.balance}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <ul className="list-disc list-inside">
            {products.map((product, index) => (
              <li key={index} className="text-lg">{product}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
