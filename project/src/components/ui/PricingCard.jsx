import { motion } from 'framer-motion';
import { FaCheck, FaExternalLinkAlt, FaFire, FaTag } from 'react-icons/fa';
import Button from './Button';

export default function PricingCard({ items, coachingPrice, totalValue, onCtaClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto bg-gradient-to-b from-primary to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-800 relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent opacity-20 rounded-bl-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-10 rounded-tr-full blur-3xl pointer-events-none" />

      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent text-sm font-semibold px-4 py-1.5 rounded-full">
          <FaFire className="text-accent" /> Everything You Get When You Book
        </span>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
        2-Day Men's Performance Reset
      </h3>
      <p className="text-blue-200 mb-8 text-center">
        One investment. A lifetime of transformation.
      </p>

      {/* Items list */}
      <ul className="space-y-3 mb-8">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex items-center justify-between gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3 border border-white/10"
          >
            <div className="flex items-start gap-3">
              <FaCheck className="text-accent flex-shrink-0 mt-0.5" />
              <span className="text-blue-50 text-sm leading-snug">{item.name}</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-accent font-bold text-sm whitespace-nowrap">{item.price}</span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on store"
                  className="text-blue-300 hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Value summary */}
      <div className="border-t border-blue-700 pt-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2 text-blue-300 text-sm">
            <FaTag /> Total Market Value
          </span>
          <span className="text-blue-300 line-through text-lg font-semibold">{totalValue}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-lg">Your Investment Today</span>
          <div className="text-right">
            <div className="text-4xl md:text-5xl font-extrabold text-white leading-none">{coachingPrice}</div>
            <div className="text-accent text-xs font-semibold mt-1 uppercase tracking-wide">Limited Spots Available</div>
          </div>
        </div>
      </div>

      <Button variant="primary" size="lg" className="w-full text-xl" onClick={onCtaClick}>
        Reserve My Seat Now
      </Button>

      <p className="text-center text-blue-300 text-xs mt-4 opacity-70">
        Secure your spot before the price goes up. No hidden fees.
      </p>
    </motion.div>
  );
}
