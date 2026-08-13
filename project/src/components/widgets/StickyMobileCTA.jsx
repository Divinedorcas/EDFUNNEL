import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Hide if near the bottom (where final CTA is)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden flex justify-center"
        >
          <Button size="lg" className="w-full text-lg shadow-lg" onClick={scrollToRegister}>
            Reserve Seat
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
