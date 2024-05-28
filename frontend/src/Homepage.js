import React, { Component } from 'react';


const options = ['Products', 'About', 'FAQ'];

class Homepage extends Component {
  renderOpts() {
    return (
      <ul className="flex justify-center list-none">
        {options.map((option, index) => (
          <li key={index} className='p-4'>
            <h2>{option}</h2>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='relative min-h-screen bg-cover bg-center' style={{ backgroundImage: "url('/SOFTWARE ENGINEER (2).png')" }}>
        <div className='absolute top-0 left-0'>
          <h1 className='font-mons text-4xl px-6 py-5 font-semibold'>Payee</h1>
          <div className='mt-4 px-6'>
            <img
              src="/igal-ness-9wY2ofzQ9Us-unsplash.jpg"
              alt="Description"
              className='rounded-lr-custom w-full sm:w-2/3 md:w-1/2 lg:w-1/4 h-auto'
            />
          </div>
          <div className='mt-4 px-6'>
            <img
              src="/rupixen-Q59HmzK38eQ-unsplash.jpg"
              alt="Second Description"
              className='rounded-lr-custom-second w-full sm:w-2/3 md:w-1/2 lg:w-1/4 h-auto'
            />
          </div>
        </div>
        <button className="font-raleway absolute top-0 right-10 md:right-10 lg:right-20 m-5 px-4 py-2 bg-white text-black border border-orange-500 hover:bg-orange-300 transition duration-200 shadow-md rounded-md">
          Get Started
        </button>
        <div className="font-raleway w-full flex justify-center pt-4">
          {this.renderOpts()}
        </div>
        <div className='flex justify-center mt-8'>
          <h1 className='font-tour pt-10 text-2xl text-center md:text-left ml-10'>
            Money Come, Money Go?
          </h1>
        </div>
        <div className='w-full flex justify-center items-center mt-20 ml-12'>
          <h1 className='font-tour font-semibold pt-20 text-4xl text-center md:text-center lg:text-right pl-12'>
            Your AI-powered financial manager<br />
          </h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
