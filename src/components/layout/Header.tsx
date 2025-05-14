import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className={`font-bold text-2xl transition-colors duration-300 flex items-center gap-2 ${
            isScrolled ? 'text-[#1a365d]' : 'text-[#1a365d]'
          }`}
        >
          <ShoppingBag className="h-7 w-7" />
          <span>KHALEEJI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`transition-colors hover:text-[#c9a55c] font-medium ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Home
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className={`transition-colors hover:text-[#c9a55c] font-medium ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {category.name}
            </Link>
          ))}
          <Link 
            to="/about" 
            className={`transition-colors hover:text-[#c9a55c] font-medium ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors hover:text-[#c9a55c] font-medium ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Cart Icon and Search */}
        <div className="flex items-center space-x-3">
          <button className="relative p-2">
            <Search className={`h-5 w-5 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
          </button>
          <Link to="/cart" className="relative p-2">
            <ShoppingBag className={`h-5 w-5 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#c9a55c] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-3 animate-fadeIn">
          <Link 
            to="/" 
            className="py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
          >
            Home
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              {category.name}
            </Link>
          ))}
          <Link 
            to="/about" 
            className="py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-md"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;