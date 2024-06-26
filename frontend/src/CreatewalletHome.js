import React, { useState } from 'react';

function CreatewalletHome() {
  const [walletName, setWalletName] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddCategory = (event) => {
    event.preventDefault();
    if (categoryName && amount) {
      const newCategory = { name: categoryName, amount: parseFloat(amount) };
      setCategories([...categories, newCategory]);
      setCategoryName('');
      setAmount('');
    }
  };

  const handleDeleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const totalAmount = categories.reduce((total, category) => total + category.amount, 0);

  return (
    <div className="container mx-auto px-4 py-8 font-raleway">
      <h1 className="font-bold font-mons text-orange-500 text-3xl py-5">Payee</h1>
      <h2 className="text-2xl font-bold mb-6">Create Your Home Wallet</h2>
      <form onSubmit={handleAddCategory} className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label htmlFor="walletName" className="w-full md:w-1/3 text-sm font-medium mb-2 md:mb-0">
            Wallet Name:
          </label>
          <input
            type="text"
            id="walletName"
            name="walletName"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
            required
            className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <h1 className="text-xl py-10 font-extrabold">Add categories & respective amounts</h1>
        </div>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label htmlFor="categoryName" className="w-full md:w-1/3 text-sm font-medium mb-2 md:mb-0">
            Category Name:
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label htmlFor="amount" className="w-full md:w-1/3 text-sm font-medium mb-2 md:mb-0">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-blue-700">
          Add Category
        </button>
      </form>
      <ul className="mt-6 list-disc pl-4">
        {categories.map((category, index) => (
          <li key={index} className="text-orange-600 flex justify-between font-semibold">
            <span>{category.name}</span>
            <span>${category.amount.toFixed(2)}</span>
            <button
              onClick={() => handleDeleteCategory(index)}
              className="text-red-500 hover:text-red-700"
            >
              <i className="fa-solid fa-trash"></i>
            </button>

          </li>
        ))}
      </ul>
      <div className="mt-6 text-xl font-bold flex justify-center">
        Total: ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
}

export default CreatewalletHome;
