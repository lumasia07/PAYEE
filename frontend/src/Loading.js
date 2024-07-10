// Loading screen

import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingTextIndex: 0,
      redirect: false // State to manage redirect
    };
    this.loadingTexts = [
      "Thank You for choosing Payee...",
      "Populating your dashboard...",
      "Fetching data...",
      "Almost there...",
      "Just a moment...",
    ];
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        loadingTextIndex: (prevState.loadingTextIndex + 1) % this.loadingTexts.length,
      }));
    }, 6000); // Change text every 3.5 seconds

    // Simulate loading for 6 seconds (6000ms) before redirecting to dashboard
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 24000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { loadingTextIndex, redirect } = this.state;

    if (redirect) {
      return <Navigate to="/create_home_wallet" />;
    }

    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-10 w-10 text-orange-500 mb-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.963 7.963 0 01-2-5.291H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="font-raleway text-3xl text-orange-500 animate-fadeInOut">{this.loadingTexts[loadingTextIndex]}</p>
        </div>
      </div>
    );
  }
}

export default Loading;
