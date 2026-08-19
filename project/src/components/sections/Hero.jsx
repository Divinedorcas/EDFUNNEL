import { motion } from 'framer-motion';
import { FaCheckCircle, FaYoutube, FaVideo } from 'react-icons/fa';
import Button from '../ui/Button';
import heroImg from '../../assets/heroimg.png';

export default function Hero() {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProgram = () => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const badges = [

    { icon: FaYoutube, text: 'YouTube Live' },
    { icon: FaCheckCircle, text: '2 Days' },

  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-green-100/40 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
                Reclaim Your Confidence:<br className="hidden md:block" />
                <span className="text-accent">The 2-Day Men's Performance Reset</span>
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                Stop letting erectile dysfunction control your confidence, your relationship, and your peace of mind.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                ED isn't just about performance; it can be a sign of sudden death, stroke, heart attack, it affects your confidence, strains relationships, and can be an early warning sign of underlying health issues. Take back control with our targeted 2-day coaching program.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" onClick={scrollToRegister} className="w-full sm:w-auto">
                  Reserve My Seat
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToProgram} className="w-full sm:w-auto">
                  View Details
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-700 font-medium"
                  >
                    <badge.icon className="text-accent w-5 h-5" />
                    <span>{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-sm"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-square md:aspect-[4/3] lg:aspect-square">
                <img
                  src={heroImg}
                  alt="Confident healthy middle-aged African man smiling with his partner"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
