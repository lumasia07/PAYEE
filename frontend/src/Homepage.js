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
        <h1 className='font-raleway text-4xl px-6 py-4 font-semibold absolute top-0 left-0'>Payee</h1>
        <div className="font-raleway w-full flex justify-center pt-3">
          {this.renderOpts()}
        </div>
      </div>
    );
  }
}

export default Homepage;
