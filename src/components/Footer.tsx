import React, { FC } from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 md:py-16 mt-16">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Your Brand</h3>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a href="#" className="hover:text-primary-300 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-primary-300 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-primary-300 transition-colors duration-200">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;