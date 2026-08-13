import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Testimonies', href: '#testimonies' },
    { name: 'Your Coache', href: '#coaches' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 z-50">
            <span className={`font-bold text-xl md:text-2xl tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white md:text-primary'
              }`}>
              Men's Health Reset Hub
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-700' : 'text-gray-800'
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              size="sm"
              onClick={(e) => scrollToSection(e, '#register')}
            >
              Reserve My Seat
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className={isScrolled ? 'text-primary' : 'text-primary'} />
            ) : (
              <FaBars className={isScrolled ? 'text-primary' : 'text-primary'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white pt-24 px-6 flex flex-col space-y-6 lg:hidden shadow-xl"
          >
            <ul className="flex flex-col space-y-6 text-center text-xl">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-800 font-semibold block py-2 border-b border-gray-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Button
                className="w-full text-lg py-4"
                onClick={(e) => scrollToSection(e, '#register')}
              >
                Reserve My Seat
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
