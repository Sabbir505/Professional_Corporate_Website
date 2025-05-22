import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Testimonials', href: '/testimonials' },
    { title: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-subtle py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">
            <span className="text-secondary">Acme</span>Corp
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === item.href 
                  ? 'text-primary' 
                  : 'text-foreground'
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary ml-4"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`py-2 font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href 
                        ? 'text-primary' 
                        : 'text-foreground'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="btn-primary w-full text-center mt-4"
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}