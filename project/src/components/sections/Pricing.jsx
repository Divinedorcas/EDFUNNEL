import SectionTitle from '../ui/SectionTitle';
import PricingCard from '../ui/PricingCard';

export default function Pricing() {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bonusItems = [
    {
      name: "The ED Root Cause Blueprint Ebook",
      price: "₦5,000",
      link: "https://selar.com/02165413l6",
    },
    {
      name: "The Testosterone Reset Ebook",
      price: "₦10,000",
      link: "https://selar.com/735r20z622",
    },
    {
      name: "Stress, Cortisol & Your Manhood (Guide)",
      price: "₦5,000",
      link: "https://selar.com/77b010j178",
    },
    {
      name: "Reignite Her: Intimacy Restoration Conversation Ebook for Couples",
      price: "₦10,000",
      link: "https://selar.com/o238q0p679",
    },
    {
      name: "The Strong Man Morning Routine Audio",
      price: "₦5,000",

    },
    {
      name: "Full Session Recording",
      price: "₦5,000",

    },
    {
      name: "30-Day Personalized Recovery Action Plan",
      price: "₦15,000",

    },

    {
      name: "Private Follow-Up Sessions",
      price: "₦15,000",

    },
    {
      name: "This program",
      price: "₦25,000",

    },

  ];

  return (
    <section id='pricing' className="py-24 bg-[#0a192f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Invest In Your Health &amp; Confidence
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            When you book the 2-Day Men's Performance Reset coaching, you unlock all of these resources — each sold separately — at no extra cost.
          </p>
        </div>

        <PricingCard
          items={bonusItems}
          totalValue="₦95,000"
          coachingPrice="₦15,000"
          onCtaClick={scrollToRegister}
        />
      </div>
    </section>
  );
}
