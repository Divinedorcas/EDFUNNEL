import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ name, age, occupation, quote, photoUrl, screenshot, rating = 5, index = 0 }) {
  /* --- Screenshot mode: show the image as the main content --- */
  if (screenshot) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="flex flex-col items-center"
      >
        {/* Phone-frame wrapper */}
        <div className="relative w-full max-w-xs mx-auto">
          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-br from-accent/30 to-blue-500/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />
          <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl border border-white/10">
            {/* Top bar (decorative notch) */}
            <div className="flex items-center justify-center mb-2">
              <div className="w-16 h-1.5 bg-gray-700 rounded-full" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={screenshot}
                alt={`Testimonial from ${name}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name badge below the card */}
        {name && (
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="flex space-x-1">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4" />
              ))}
            </div>
            <p className="text-sm font-semibold text-primary">{name}{age ? `, ${age}` : ''}</p>
            {occupation && <p className="text-xs text-gray-500">{occupation}</p>}
          </div>
        )}
      </motion.div>
    );
  }

  /* --- Text quote fallback --- */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
    >
      <FaQuoteLeft className="text-accent/30 w-8 h-8 mb-4" />

      <div className="flex space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 w-5 h-5" />
        ))}
      </div>

      <p className="text-gray-700 italic flex-grow mb-8 text-lg">
        "{quote}"
      </p>

      <div className="flex items-center space-x-4 mt-auto">
        <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {photoUrl ? (
            <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-primary">{name}{age ? `, ${age}` : ''}</h4>
          {occupation && <p className="text-sm text-gray-500">{occupation}</p>}
        </div>
      </div>
    </motion.div>
  );
}
