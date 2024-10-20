import { useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import { EllipsisVertical } from 'lucide-react';
import Modal from './Modal.jsx'; // Import the Modal component

const ApiPage = () => {
  const [apis, setApis] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleGenerateApi = () => {
    const newApiData = {
      id: Math.random().toString(36).substr(2, 9),
      name: `${Math.random().toString(36).substr(2, 9)}`,
      token: `${Math.random().toString(36).substr(2, 9)}`,
      blockchainName: 'Sol, eth, hello',
    };
    setApis((prevApis) => [...prevApis, newApiData]);
    setModalContent(`Generated API: ${newApiData.name}`);
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 text-white pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">API Generator</h1>
        <button
          className="bg-green-600 hover:bg-green-700 m-4 text-white font-bold py-2 px-4 rounded"
          onClick={handleGenerateApi}
        >
          Generate API
        </button>
        <table className='text-white w-full'>
          <thead className='bg-green-950 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 w-full'>
            <tr>
              <th className="py-2 px-4 text-left font-semibold">Name</th>
              <th className="py-2 px-4 text-left font-semibold">Token</th>
              <th className="py-2 px-4 text-left font-semibold">Blockchain</th>
              <th className="py-2 px-4 text-left font-semibold">Options</th>
            </tr>
          </thead>
          <tbody>
            {apis.map((api) => (
              <tr key={api.id}>
                <td className="py-2 px-4 border-b">{api.name}</td>
                <td className="py-2 px-4 border-b">{api.token}</td>
                <td className="py-2 px-4 border-b">{api.blockchainName}</td>
                <td className="py-2 px-4 border-b"><EllipsisVertical /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} />
    </>
  );
}

export default ApiPage;