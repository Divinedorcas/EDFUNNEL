import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function FinalCTA() {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-[#0f223f] text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[140%] bg-accent opacity-20 rounded-full blur-[100px] transform rotate-12"></div>
        <div className="absolute top-[40%] right-[5%] w-[30%] h-[80%] bg-blue-500 opacity-20 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
            Take the First Step Toward Better Health and Greater Confidence
          </h2>

          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            You don't have to live with uncertainty and frustration. Join us for 2 days of intensive, actionable coaching that will reset your performance.
          </p>

          <div className="flex justify-center mb-6">
            <Button size="lg" className="w-full md:w-auto text-xl px-10 py-5 shadow-2xl" onClick={scrollToRegister}>
              Reserve Your Seat Today
            </Button>
          </div>

          <p className="text-accent font-semibold text-lg flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2"></span>
            Seats are limited to maintain an interactive coaching experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
