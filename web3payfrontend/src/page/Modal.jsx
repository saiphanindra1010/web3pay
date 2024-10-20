// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">API Details</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">API Name</label>
          <input type="text" className='mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300' />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Blockchain Name</label>
          <input type="text" className='mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none focus:ring focus:ring-blue-300' />
        </div>

        <p className="text-gray-700 mb-4">{content}</p>
        
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200" onClick={onClose}>
          Save
        </button>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;