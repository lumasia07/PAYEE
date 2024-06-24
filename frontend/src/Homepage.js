import React, { Component } from 'react';
import Login from './Login';
import Footer from './Footer';

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
    console.log("User pressed login!!");
  };

  renderOpts() {
    return (
      <ul className="flex justify-center list-none">
        {options.map((option, index) => (
          <li key={index} className="p-4">
            <h2>{option}</h2>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { showLogin } = this.state;

    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="absolute top-0 left-0 p-4">
          <h1 className="font-mons text-3xl md:text-4xl lg:text-5xl px-4 py-2 font-semibold text-orange-500">Payee</h1>
        </div>
        <button
          className="rounded-lg font-raleway absolute top-0 right-4 m-5 px-4 py-2 bg-orange-200 text-black border border-orange-500 hover:bg-orange-300 transition duration-200 shadow-md"
          onClick={this.handleLoginClick}
        >
          Log in ?
        </button>
        <div className="font-raleway w-full flex justify-center pt-4">
          {this.renderOpts()}
        </div>
        <div className="flex justify-center px-4 mx-4">
          <h1 className="font-raleway py-12 text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            The fastest way to manage your finances & budgets with AI-powered solutions
          </h1>
        </div>
        <div className="font-raleway flex justify-center items-center">
          <h2 className="text-center text-lg md:text-xl lg:text-2xl">Manage your income by the click of a button</h2>
        </div>
        <div className="py-3 w-full flex justify-center my-3">
          <button className="shadow-md font-raleway px-6 py-3 bg-orange-300 text-black rounded-full transition duration-200 hover:bg-gradient-to-r from-orange-300 to-orange-500">
            Try it out {'>'}
          </button>
        </div>
        <div className="py-12 my-12 mx-5">
          <h1 className="font-raleway font-semibold flex justify-center text-4xl">Our Products</h1>
          <div className="font-raleway flex flex-wrap justify-center space-x-0 lg:space-x-12 py-7 gap-y-8">
            {this.renderProduct("Home", "Manage your household expenses and budgets effortlessly.", [
              "Track your daily spending",
              "Set savings goals",
              "Get bill reminders"
            ])}
            {this.renderProduct("Business", "Optimize your business finances with our advanced tools.", [
              "Automate invoicing",
              "Track expenses",
              "Generate financial reports"
            ])}
            {this.renderProduct("Institution", "Manage institutional finances with comprehensive oversight.", [
              "Budget allocation",
              "Grant management",
              "Financial auditing"
            ])}
          </div>
        </div>
        <div className="flex justify-center font-raleway">
          <h1 className="font-semibold text-4xl">The power to manage your money</h1>
        </div>
        <div className="flex flex-wrap justify-center my-12 gap-4">
          {this.renderImageCard('./Alisa-Dyson-family-outfits-landscape-9d5f7852b672bb59bf818761944ba9d6-zybravgx2q47.jpeg', 'Manage Family')}
          {this.renderImageCard('./flat-lay-business-concept.jpg', 'Streamline Business')}
          {this.renderImageCard('./shallow-focus-shot-african-child-learning-school.jpg', 'Manage Institutions')}
        </div>
        <div className="flex justify-center">
          <h1 className="font-raleway text-4xl font-semibold">Help us help you</h1>
        </div>
        <div className="py-3 w-full flex justify-center my-3">
          <button className="shadow-md font-raleway px-6 py-3 bg-orange-300 text-black rounded-full transition duration-200 hover:bg-gradient-to-r from-orange-300 to-orange-500">
            Get Started {'>'}
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
        <Footer />
      </div>
    );
  }

  renderProduct(title, description, features) {
    return (
      <div className="w-full md:w-1/2 lg:w-1/4 bg-gradient-to-r from-orange-300 to-orange-500 rounded-md shadow-lg p-5 transform transition duration-200 hover:scale-105">
        <h1 className="font-raleway text-xl mb-2 flex justify-center font-semibold">{title}</h1>
        <p className="mb-2">{description}</p>
        <ul className="list-disc list-inside mb-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full transition duration-200 hover:bg-gray-700">
            Learn More {'>'}
          </button>
        </div>
      </div>
    );
  }

  renderImageCard(src, title) {
    return (
      <div className="relative w-full md:w-1/2 lg:w-1/4 h-64">
        <img src={src} alt={title} className="rounded-lg shadow-lg w-full h-full object-cover transform transition duration-200 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-75 transition duration-200 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center opacity-0 hover:opacity-100 transition duration-200">
          <a href="#l" className="font-raleway font-semibold hover:underline">{title}</a>
        </div>
      </div>
    );
  }
}

export default Homepage;
