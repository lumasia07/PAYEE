// Chose available plans

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChosePlan extends Component {
  render() {
    return (
      <div className='flex flex-col justify-center items-center font-raleway min-h-screen bg-gray-100'>
        <h1 className='font-mons font-bold text-4xl text-orange-500'>Payee</h1>
        <h1 className='text-4xl mt-12 mb-8 font-bold text-gray-800'>Choose Your Plan</h1>
        <div className='flex flex-wrap justify-center gap-8'>
          <div className='plan-card bg-white border rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Home Plan</h2>
            <p className='mb-4 text-gray-600'>Ideal for home budgets & billing</p>
            <p className='text-lg font-bold mb-6 text-gray-800'>$Free/month</p>
            <Link to="/register">
              <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:border-orange-500'>
                Select Plan
              </button>
            </Link>
          </div>
          <div className='plan-card bg-white border rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Business Plan</h2>
            <p className='mb-4 text-gray-600'>For professionals & business needs</p>
            <p className='text-lg font-bold mb-6 text-gray-800'>$Free/month</p>
            <Link to="/register">
              <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:border-orange-500'>
                Select Plan
              </button>
            </Link>
          </div>
          <div className='plan-card bg-white border rounded-lg p-6 text-center shadow-lg transition-transform transform hover:scale-105'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-700'>Enterprise Plan</h2>
            <p className='mb-4 text-gray-600'>Best for large organizations & institutions</p>
            <p className='text-lg font-bold mb-6 text-gray-800'>$100/month</p>
            <Link to="/register">
              <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:border-orange-500'>
                Select Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ChosePlan;
