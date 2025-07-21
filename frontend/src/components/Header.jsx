import React from "react";

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://placehold.co/50x50" alt="Logo" className="h-10 w-10 rounded-lg" />
        <h1 className="ml-3 text-2xl font-bold text-gray-900">ResumeBuilder Pro</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">Login</button>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">Register</button>
      </div>
    </div>
  </header>
);

export default Header;
