import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

interface HeaderProps {
  location: string;
  setLocation: (loc: string) => void;
}

const Header: React.FC<HeaderProps> = ({ location, setLocation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Utility */}
      <div className="bg-husky-darkBlue text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Satisfaction Guaranteed Since 1974</span>
            <div className="flex items-center space-x-1">
               <MapPin size={14} className="text-husky-orange" />
               <span className="text-gray-300">Serving:</span>
               <select 
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                 className="bg-transparent border-none text-white font-bold cursor-pointer focus:ring-0"
               >
                 {SERVICE_AREAS.map(area => (
                   <option key={area} value={area} className="text-black">{area}</option>
                 ))}
               </select>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:905-761-9485" className="flex items-center font-bold hover:text-husky-orange transition-colors">
              <Phone size={14} className="mr-2" />
              <span className="hidden md:inline">905-761-9485</span>
              <span className="md:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
               {/* Simulating the Husky Logo with Text/Icon */}
               <div className="font-black text-2xl tracking-tighter text-husky-darkBlue italic group-hover:scale-105 transition-transform">
                 HUSKY<span className="text-husky-red">AIR</span>
               </div>
               <div className="hidden lg:block ml-2 text-[10px] leading-tight text-gray-500 font-semibold uppercase tracking-widest">
                 Heating &<br/>Air Conditioning
               </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-slate-700">
            <a href="#services" className="hover:text-husky-blue transition-colors">Services</a>
            <a href="#rebates" className="hover:text-husky-blue transition-colors">Rebates</a>
            <a href="#timeline" className="hover:text-husky-blue transition-colors">Our History</a>
            <a href="#testimonials" className="hover:text-husky-blue transition-colors">Reviews</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={scrollToContact} className="bg-husky-red text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-500/30 hover:bg-red-700 hover:scale-105 transition-all flex items-center">
              Get Free Quote
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
            <a href="#services" className="text-lg font-medium p-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#rebates" className="text-lg font-medium p-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Rebates</a>
            <a href="#timeline" className="text-lg font-medium p-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="#testimonials" className="text-lg font-medium p-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <button onClick={scrollToContact} className="bg-husky-red text-white w-full py-3 rounded-xl font-bold text-lg shadow-md">
              Get Free Quote
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;