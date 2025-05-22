import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent px-4 md:px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            alt="Company logo white abstract shape"
            className="w-6 h-6"
            src="https://storage.googleapis.com/a1aa/image/4999729c-d4de-4779-9205-abb8e232644d.jpg"
          />
        </div>

        {/* Hamburger for small & medium screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>

        {/* Nav for larger screens */}
        <div className="hidden md:flex flex-1 justify-between items-center ml-6">
          {/* Left Nav */}
          <nav className="flex items-center space-x-4 text-white text-sm font-normal">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">AI Engine</a>
            <a href="#" className="hover:underline">Capabilities</a>
            <a href="#" className="hover:underline">AI Research</a>
            <button className="flex items-center hover:underline focus:outline-none">
              <span>Resources</span>
              <i className="fas fa-caret-down ml-1 text-xs"></i>
            </button>
            <a href="#" className="hover:underline">Pricing</a>
          </nav>

          {/* Right Nav */}
          <nav className="flex items-center space-x-4 text-sm font-normal">
            <a href="#" className="hover:underline text-white">Sign in</a>
            <a href="#" className="hover:underline text-white">View demo</a>
            <a href="#" className="hover:underline text-white">Contact sales</a>
            <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 transition">
              Start free trial
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-white text-sm font-normal">
          {/* Left Nav */}
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">AI Engine</a>
            <a href="#" className="hover:underline">Capabilities</a>
            <a href="#" className="hover:underline">AI Research</a>
            <button className="flex items-center hover:underline focus:outline-none">
              <span>Resources</span>
              <i className="fas fa-caret-down ml-1 text-xs"></i>
            </button>
            <a href="#" className="hover:underline">Pricing</a>
          </nav>

          {/* Right Nav */}
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Sign in</a>
            <a href="#" className="hover:underline">View demo</a>
            <a href="#" className="hover:underline">Contact sales</a>
            <button className="bg-white text-black rounded-md px-4 py-2 hover:bg-gray-200 transition">
              Start free trial
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
