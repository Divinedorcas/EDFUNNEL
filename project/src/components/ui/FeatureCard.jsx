import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start space-x-4"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
      </div>
    </motion.div>
  );
}
