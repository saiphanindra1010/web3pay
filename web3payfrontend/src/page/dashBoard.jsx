import Navbar from '../components/Navbar'

import UserRetention from "../components/analytics/UserRetention";

const tableData = [
    { sno: 1, blockchain: 'Solana', from: 'e3e70682e5f60a1d12e7a6bc7c8ee21d51ff3a5f8f9e0bd3b8f4b0c272a1baba', me: 'e3e70682e5f60a1d12e7a6bc7c8ee21d51ff3a5f8f9e0bd3b8f4b0c272a1baba', amount: '230 ETH', status: "Success" },
    { sno: 2, blockchain: 'Ethereum', from: 'e3e70682e5f60a1d12e7a6bc7c8ee21d51ff3a5f8f9e0bd3b8f4b0c272a1baba', me: 'e3e70682e5f60a1d12e7a6bc7c8ee21d51ff3a5f8f9e0bd3b8f4b0c272a1baba', amount: '450 ETH',status: "Failure" },
    { sno: 3, blockchain: 'Binance Smart Chain', from: 'e3e70682e5f60a1d12e7a6bc7c8ee21d51ff3a5f8f9e0bd3b8f4b0c272a1baba', me: 'e3e70682e5f60a1d12e7a6bc7c8ee21d51ff3a5f8f9e0bd3b8f4b0c272a1baba', amount: '150 BNB',status:"Failure" },
  ];
const dashBoard = () => {
    return (
        <>
          <Navbar />
          <div className='w-5/6 mx-auto mt-4 p-4'>
    
            <UserRetention />
    
            <div className="container mx-auto p-4">
              {/* <div className='bg-green-800'> Transactions Table</div> */}
              <div className="overflow-x-auto">
                <table className='text-white w-full'>
                  <thead className='bg-green-950 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6  w-full'>
                    <tr>
                      <th className="py-2 px-4  text-left font-semibold">S no</th>
                      <th className="py-2 px-4 text-left font-semibold">Blockchain</th>
                      <th className="py-2 px-4 text-left font-semibold">From</th>
                      <th className="py-2 px-4  text-left font-semibold">To</th>
                      <th className="py-2 px-4  text-left font-semibold">Amount</th>
                      <th className="py-2 px-4  text-left font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.sno} className="transition duration-150">
                        <td className="py-2 px-4 border-b">{row.sno}</td>
                        <td className="py-2 px-4 border-b">{row.blockchain}</td>
                        <td className="py-2 px-4 border-b">{row.from}</td>
                        <td className="py-2 px-4 border-b">{row.me}</td>
                        <td className="py-2 px-4 border-b">{row.amount}</td>
                        <td className="py-2 px-4 border-b">
                          <span className={`px-2 py-1 rounded ${row.status === 'Success' ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )
}

export default dashBoard