import { useState } from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className=" mx-auto mt-4 p-4  bg-opacity-50 backdrop-filter backdrop-blur-lg  rounded-lg flex justify-center">
      <nav className="container flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold  dark:text-black">
          Web3 Payments
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-blue-400 dark:text-white sm:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isNavOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <div className={`w-full sm:flex sm:items-center sm:justify-center sm:w-auto ${isNavOpen ? 'block' : 'hidden'}`}>
  <ul className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-4 sm:mt-0">
    <li>
      <Link to="/" className="text-blue-800 text-lg dark:text-black font-semibold hover:underline transition">Dashboard</Link>
    </li>
    
    <li>
      <Link to="/apicreate" className="text-blue-800 text-lg font-semibold dark:text-black hover:underline transition">API Console</Link>
    </li>
    <li>
      <Link to="/" className="text-blue-800 text-lg dark:text-black font-semibold hover:underline transition">Docs</Link>
    </li>
    {/* <li>
      <Link to="/" className="text-blue-800 text-lg dark:text-black font-semibold hover:underline transition">Profile</Link>
    </li> */}
    <li>
      <button
        type="button"
        className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white font-bold py-2 px-4 rounded"
      >
        Sign out
      </button>
    </li>
  </ul>
</div>
      </nav>
    </header>
  );
}

export default Navbar;