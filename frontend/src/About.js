import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="mt-5 font-raleway max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
          <div className="text-4xl font-semibold text-orange-500 font-mons">Payee</div>
        </div>
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to Payee, your go-to platform for seamless wallet and budget management using AI assistants.
            The inspiration for Payee came from my personal struggles with managing multiple 
            wallets and keeping track of my expenses effectively. I realized the need for a 
            user-friendly tool that could simplify financial management, both for personal use 
            and for small businesses. This project started in early 2024 as part of my Portfolio 
            Project for Holberton School, though very basic, it aims to showcase my skills in full-stack development.
            You can learn more about Holberton School 
            <a href="https://www.holbertonschool.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer"> here</a>.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Team</h2>
          <ul className="list-none">
            <li className="mb-4">
              <p className="text-lg font-semibold text-gray-800">Lumasia Stancelaus</p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/lumasia-stancelaus" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/lumasia07" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com/GOATLumasia" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-4">Project Repository</h2>
          <a href="https://github.com/lumasia07/PAYEE" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    );
  }
}

export default About;
