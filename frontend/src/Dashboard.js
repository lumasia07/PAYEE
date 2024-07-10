// Customer dashboard

import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [wallets, setWallets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/my_home_wallet');
        if (!response.ok) {
          throw new Error('Failed to fetch wallet data');
        }
        const data = await response.json();
        setWallets(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWallets();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 font-raleway">
      <h1 className="font-bold font-mons text-orange-500 text-3xl py-5">Payee Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Wallet Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Total Amount</th>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Categories</th>
          </tr>
        </thead>
        <tbody>
          {wallets.map((wallet) => {
            const totalAmount = wallet.categories.reduce((total, category) => total + category.amount, 0);
            return (
              <tr key={wallet.id}>
                <td className="py-2 px-4 border-b border-gray-300">{wallet.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">${totalAmount.toFixed(2)}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <ul>
                    {wallet.categories.map((category, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{category.name}</span>
                        <span>${category.amount.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
