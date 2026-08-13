import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const phoneNumber = "2348064500833"; // Placeholder
  const message = "Hi, I'm interested in the 2-Day Men's Performance Reset.";

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center hover:shadow-xl transition-shadow"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  );
}
