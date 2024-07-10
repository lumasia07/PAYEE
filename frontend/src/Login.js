// Login form

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInClick = () => {
    navigate('/register');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        setTimeout(() => {
          navigate('/loading');
        }, 100); // Simulate loading for 100ms
      } else {
        setMessage('Login failed: ' + result.message);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 font-raleway">
      <div className="bg-white rounded-md p-8 w-full max-w-md">
        <h1 className='font-bold text-3xl mb-4 text-center text-blue-500 font-mons'>Payee</h1>
        <h2 className='font-semibold mb-6 text-center text-gray-800'>Login to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <button
                type="button"
                onClick={handleSignInClick}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
            </div>
          </div>
          {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
