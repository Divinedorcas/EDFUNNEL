import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProblemSection from './components/sections/ProblemSection';
import WhyItMatters from './components/sections/WhyItMatters';
import ProgramOverview from './components/sections/ProgramOverview';
import Bonuses from './components/sections/Bonuses';
import WhoShouldAttend from './components/sections/WhoShouldAttend';
import Pricing from './components/sections/Pricing';
import RegistrationProcess from './components/sections/RegistrationProcess';
import MeetYourCoaches from './components/sections/MeetYourCoaches';
import FAQ from './components/sections/FAQ';
import Testimonials from './components/sections/Testimonials';
import FinalCTA from './components/sections/FinalCTA';
import CountdownTimer from './components/widgets/CountdownTimer';
import FloatingWhatsApp from './components/widgets/FloatingWhatsApp';
import StickyMobileCTA from './components/widgets/StickyMobileCTA';

function App() {
  // Registration closes: August 28, 2026 at 7:00 PM
  const targetDate = new Date('2026-08-28T19:00:00');

  return (
    <div className="font-sans min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Countdown Banner */}
        <div className="bg-[#0a192f] py-6 border-t-4 border-accent">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-white font-bold text-xl text-center">Registration closes in:</p>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>

        <ProblemSection />
        <WhyItMatters />
        {/*<ProgramOverview />
         <Bonuses />*/}
        <WhoShouldAttend />
        <Testimonials />
        <Pricing />
        <RegistrationProcess />
        <MeetYourCoaches />
        <FinalCTA />
        <FAQ />

      </main>

      <Footer />

      {/* Global Widgets */}
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
