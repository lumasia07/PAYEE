import React from 'react';

const Login = () => {
  return (
    <div>
      <h1 className='font-mons font-semibold text-3xl'>Payee</h1>
      <h2 className='font-tour'>Login</h2>
      <form>
        <div className="my-4">
          <label className="font-mons block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="font-mons block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*****"
          />
        </div>
        <div className="flex items-center justify-between">
          <h2>Do not have an account?</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline font-tour ml-4"
            type="button"
          >
            Sign In  
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
