import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function BonusCard({ title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-primary text-white p-6 rounded-2xl shadow-lg border border-blue-800"
    >
      <div className="flex items-start space-x-3 mb-4">
        <FaCheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      {description && <p className="text-blue-100">{description}</p>}
    </motion.div>
  );
}
