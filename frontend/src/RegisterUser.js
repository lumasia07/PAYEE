import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    first_password: '',
    confirm_password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.first_password !== formData.confirm_password) {
      setMessage("Passwords do not match!");
      return;
    }

    for (const key in formData) {
      if (formData[key].trim() === '') {
        setMessage(`${key.replace('_', ' ')} cannot be empty!`);
        return;
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage("Invalid email address!");
      return;
    }

    try {
      console.log("Payload:", formData);
      const response = await fetch('http://127.0.0.1:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Your registration is successful!");

        navigate("/registering_user")

        // Clear form after successful registration
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          first_password: '',
          confirm_password: ''
        });
      } else {
        setMessage('Registration failed: ' + result.message);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-raleway">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full mx-4 md:mx-auto md:flex md:items-center">
        <div className="md:w-2/3 md:mr-4">
          <div className="text-3xl font-bold text-orange-400 mb-4">Payee</div>
          <h1 className="text-2xl font-semibold mb-2">Register</h1>
          <h2 className="text-gray-700 mb-6">Create an account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                id="first_name"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                id="last_name"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="first_password" className="block text-sm font-medium text-gray-700">Enter Password</label>
              <input
                id="first_password"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Password"
                value={formData.first_password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirm_password"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>
          {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
        </div>
        <div className="hidden md:flex md:w-1/3 md:justify-center md:items-center">
          <img
            src={`${process.env.PUBLIC_URL}/registerUserPic.jpg`}
            alt="Register"
            className="max-w-full max-h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
