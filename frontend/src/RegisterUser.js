import React from 'react';

const RegisterUser = () => {
  return (
    <div className='flex mx-7 my-7 py-4 border rounded-lg px-8 bg-gray-200 border-solid border-orange-400'>
      <div className='w-2/3'>
        <div className='font-mons text-3xl font-semibold text-orange-400'>Payee</div>
        <h1 className='font-tour font-semibold text-2xl'>Register</h1>
        <h2 className='font-tour'>Create an account</h2>
        <form>
          <div className="my-4">
            <label className="font-raleway block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
              First name
            </label>
            <input
              className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="my-4">
            <label className="font-raleway block text-gray-700 text-sm font-bold mb-2" htmlFor="sec_name">
              Second name
            </label>
            <input
              className="shadow appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sec_name"
              type="text"
              placeholder="Second name"
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
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline font-tour ml-4"
              type="button"
            >
              Register  
            </button>
          </div>
        </form>
      </div>
      <div className='w-1/3 flex justify-center items-center'>
        <img src={`${process.env.PUBLIC_URL}./resgisterUserPic.jpg`} alt="Register" className='max-w-full max-h-full object-contain border rounded-lg' />
      </div>
    </div>
  );
};

export default RegisterUser;
