import { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="w-5/6 mx-auto mt-4 p-4 border bg-green-950 bg-opacity-50 backdrop-filter backdrop-blur-lg border-green-700 shadow-lg rounded-lg flex justify-center">
      <nav className="container flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-green-900 dark:text-white">
          Web3 Payments
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-green-400 dark:text-white sm:hidden"
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
        <div className={`w-full sm:flex sm:items-center sm:w-auto ${isNavOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0">
            <li>
              <a href="#" className="text-green-800 dark:text-white hover:underline transition">Dashboard</a>
            </li>
            <li>
              <a href="#" className="text-green-800 dark:text-white hover:underline transition">API</a>
            </li>
            <li>
              <button type="button" className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Sign out</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;