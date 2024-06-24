import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 font-raleway">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Payee. All rights reserved.
          </div>
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-orange-400 transition duration-200">Privacy Policy</a>
            <a href="/terms" className="hover:text-orange-400 transition duration-200">Terms of Service</a>
            <a href="/contact" className="hover:text-orange-400 transition duration-200">Contact Us</a>
          </div>
        </div>
      </div>
      <div className='flex justify-end mr-12 mt-2'><h2 className='font-mons font-bold text-orange-500 text-2xl'>Payee</h2></div>
    </footer>
  );
};

export default Footer;
