import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Initial state: open

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClasses = `fixed top-0 left-0 h-screen w-64 transition duration-300 ease-in-out ${
    isOpen ? 'bg-blue-800 text-white' : 'w-0' // Sidebar hidden when closed
  }`;

  return (
    <div className={sidebarClasses}>
      <div className="flex h-full">
        <div className="flex items-center justify-center p-4">
          <span className="text-xl font-bold"></span>
          <button onClick={toggleSidebar} className="ml-auto bg-slate-950 text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <ul className={`flex flex-col space-y-1 p-4 ${isOpen ? '' : 'hidden'}`}>

        <li className="cursor-pointer hover:bg-gray-700">
            <a href="/" className="flex items-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7 2 2L3 12z" />
              </svg>
              <span>Home</span>
            </a>
          </li>


          <li className="cursor-pointer hover:bg-gray-700">
            <a href="sports" className="flex items-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7 2 2L3 12z" />
              </svg>
              <span>Sports</span>
            </a>
          </li>

          <li className="cursor-pointer hover:bg-gray-700">
            <a href="/entmt" className="flex items-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7 2 2L3 12z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Entertainment</span>
            </a>
          </li>

          <li className="cursor-pointer hover:bg-gray-700">
            <a href="/pols" className="flex items-center p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7 2 2L3 12z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Politics</span>
            </a>
          </li>
          {/* ... other tabs ... */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
