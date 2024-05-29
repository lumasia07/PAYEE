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
      <div className='relative min-h-screen bg-cover bg-center' style={{ backgroundImage: "url('/SOFTWARE ENGINEER (2).png')" }}>
        <div className='absolute top-0 left-0'>
          <h1 className='font-mons text-4xl px-6 py-5 font-semibold'>Payee</h1>
          <div className='mt-4 px-6'>
            <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden'>
              <img
                src="/igal-ness-9wY2ofzQ9Us-unsplash.jpg"
                alt="Description"
                className='absolute inset-0 w-full h-full object-cover rounded-lr-custom'
              />
            </div>
          </div>
          <div className='mt-4 px-6'>
            <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden'>
              <img
                src="/rupixen-Q59HmzK38eQ-unsplash.jpg"
                alt="Second Description"
                className='absolute inset-0 w-full h-full object-cover rounded-lr-custom-second'
              />
            </div>
          </div>
        </div>
        <button
          className="font-raleway absolute top-0 right-10 md:right-10 lg:right-20 m-5 px-4 py-2 bg-white text-black border border-orange-500 hover:bg-orange-300 transition duration-200 shadow-md rounded-md"
          onClick={this.handleLoginClick}
        >
          Log in ?
        </button>
        <div className="font-raleway w-full flex justify-center pt-4">
          {this.renderOpts()}
        </div>
        <div className='flex justify-center mt-8'>
          <h1 className='font-tour pt-10 text-2xl text-center md:text-left ml-10'>
            Money Come, Money Go?
          </h1>
        </div>
        <div className='flex w-full justify-center items-center my-20'>
          <h1 className='font-tour font-semibold py-10 text-4xl text-center md:text-center lg:text-right lg:ml-20'>
            Your AI-powered financial manager
          </h1>
        </div>
        <div className='absolute bottom-20 w-full flex justify-center'>
          <button className='font-raleway px-6 py-3 bg-orange-300 text-black rounded-md transition duration-200 hover:bg-gradient-to-r from-orange-300 to-orange-500'>
            Get Started
          </button>
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
