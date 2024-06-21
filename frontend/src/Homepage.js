import React, { Component } from 'react';
import Login from './Login';

const options = ['Products', 'About', 'FAQ'];

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ showLogin: true });
    console.log("User pressed login!!")
  };

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
    const { showLogin } = this.state;

    return (
      <div className='bg-gray-100 min-h-screen'>
        <div className='absolute top-0 left-0'>
          <h1 className='font-mons text-4xl px-6 py-5 font-semibold text-orange-500'>Payee</h1>
          <div className='mt-4 px-6'>
           </div>
        </div>
        <button
          className=" rounded-lg font-raleway absolute top-0 right-10 md:right-10 lg:right-20 m-5 px-4 py-2 bg-orange-200 text-black border border-orange-500 hover:bg-orange-300 transition duration-200 shadow-md"
          onClick={this.handleLoginClick}
        >
          Log in ?
        </button>
        <div className="font-raleway w-full flex justify-center pt-4">
          {this.renderOpts()}
        </div>
        <div className='flex justify-center px-12 mx-12'>
          <h1 className='font-raleway py-12 text-4xl font-semibold text-center px-12 mx-12'>
            The fastest way to manage you finances & budgets with AI-powered solutions
          </h1>
        </div>
        <div className='font-raleway flex justify-center items-center'>
          <h2>Manage your income by the click of a button</h2>
        </div>
        <div className='py-3 w-full flex justify-center my-3'>
          <button className='shadow-md font-raleway px-6 py-3 bg-orange-300 text-black rounded-full transition duration-200 hover:bg-gradient-to-r from-orange-300 to-orange-500'>
            Try it out {'>'} 
          </button>
        </div>
        <div className='py-12 my-12 mx-5'>
          <h1 className='font-raleway font-semibold flex justify-center text-3xl'>Our Products</h1>
          <div className='flex justify-center space-x-12 py-7'>
          <div className='w-1/4 bg-orange-300 rounded-md shadow-lg'>
            me
          </div>
          <div className='w-1/4 bg-orange-300 rounded-md shadow-lg'>
            me
          </div>
          <div className='w-1/4 bg-orange-300 rounded-md shadow-lg'>
            me
          </div>
          </div>
          
        </div>
        {showLogin && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-orange-100 p-8 rounded-md shadow-lg">
              <Login />
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full font-tour"
                onClick={() => this.setState({ showLogin: false })}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Homepage;
