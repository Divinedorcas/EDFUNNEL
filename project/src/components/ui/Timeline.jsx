import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Timeline({ items }) {
  return (
    <div className="relative border-l-2 border-accent/30 ml-4 md:ml-6 space-y-8 pb-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8"
        >
          {/* Dot */}
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-accent border-4 border-white shadow-sm" />
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-primary mb-2">
              {item.title}
            </h4>
            {item.description && (
              <p className="text-gray-600 mb-4">{item.description}</p>
            )}
            {item.points && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-center space-x-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
