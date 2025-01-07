import React from 'react';
import Header from './components/Header';
import expnike1 from './images/expnike1.png';

const ExpNike = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page In Progress</h1>
        <p className="text-lg text-gray-600 mb-6">
          Currently thinking of how to design this page. Come back soon!
        </p>
        <div className="flex justify-center">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpNike;
