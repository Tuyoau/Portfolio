import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; 
import Aos from "aos";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black fixed w-full z-10">
      <nav data-aos="fade-down" className="container mx-auto flex items-center justify-between p-6">
        <div className="text-white text-4xl font-bold">
          PORTFOLIO
        </div>
        <div className={`absolute md:static bg-black md:flex md:items-center md:space-x-10 w-full md:w-auto left-0 top-16 transition-all duration-300 ease-in ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0 list-none w-full md:w-auto">
            <li>
              <a href="#Proflie" className="menu__link text-2xl text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#Skill" className="menu__link text-2xl text-white hover:text-gray-300">Skills</a>
            </li>
            <li>
              <a href="#Blog" className="menu__link text-2xl text-white hover:text-gray-300">Blog</a>
            </li>
            <li>
              <a href="#Contact" className="menu__link text-2xl text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menu md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </nav>
    </header>
  );
}
