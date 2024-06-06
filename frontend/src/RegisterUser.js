import React, { useState, useEffect } from 'react';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    first_username: '',
    second_username: '',
    email: '',
    first_password: '',
    confirm_password: ''
  });

  useEffect(() => {
    // Example of side effect: Fetch initial data (could be user profile data, etc.)
    const fetchInitialData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5001/initial-data');
        const initialData = await response.json();
        setFormData(initialData);
      } catch (error) {
        console.error('Failed to fetch initial data:', error);
      }
    };

    fetchInitialData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.first_password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Your registration is successful!");

        // Clear form after successful registration
        setFormData({
          first_username: '',
          second_username: '',
          email: '',
          first_password: '',
          confirm_password: ''
        });
      } else {
        alert('Registration failed: ' + result.message);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className='flex mx-7 my-7 py-4 border rounded-lg px-8 bg-gray-200 border-solid border-orange-400'>
      <div className='w-2/3'>
        <div className='font-mons text-3xl font-semibold text-orange-400'>Payee</div>
        <h1 className='font-tour font-semibold text-2xl'>Register</h1>
        <h2 className='font-tour'>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="font-raleway block text-gray-700 text-sm font-bold mb-2" htmlFor="first_username">
              First name
            </label>
            <input
              className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_username"
              type="text"
              placeholder="First name"
              value={formData.first_username}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label className="font-raleway block text-gray-700 text-sm font-bold mb-2" htmlFor="second_username">
              Second name
            </label>
            <input
              className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="second_username"
              type="text"
              placeholder="Second name"
              value={formData.second_username}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label className="font-raleway block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="johndoe@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="font-raleway block text-gray-700 text-sm font-bold mb-2" htmlFor="first_password">
              Enter Password
            </label>
            <input
              className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="first_password"
              type="password"
              placeholder="*****"
              value={formData.first_password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="font-raleway block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              type="password"
              placeholder="*****"
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline font-tour ml-4"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className='w-1/3 flex justify-center items-center'>
        <img src={`${process.env.PUBLIC_URL}/registerUserPic.jpg`} alt="Register" className='max-w-full max-h-full object-contain border rounded-lg' />
      </div>
    </div>
  );
};

export default RegisterUser;
