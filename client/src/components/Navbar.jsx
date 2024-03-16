import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollHeight > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-center transition-all duration-300 ${
        isScrolled ? 'bg-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <img src={logo} alt="SAATHI Logo" className="h-12 mr-4" />
        <span className="text-slate-900 font-bold text-3xl">Empowering Elders, Enriching Lives</span>
      </div>
    </nav>
  );
};

export default Navbar;