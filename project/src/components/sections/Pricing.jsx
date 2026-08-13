import SectionTitle from '../ui/SectionTitle';
import PricingCard from '../ui/PricingCard';

export default function Pricing() {
  const scrollToRegister = () => {
    document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bonusItems = [
    {
      name: "The Root Cause Blueprint Ebook",
      price: "₦9,000",
      link: "https://selar.com/rootcauseblueprint",
    },
    {
      name: "The Testosterone Reset Ebook",
      price: "₦15,000",
      link: "https://selar.com/testosteronereset",
    },
    {
      name: "The Strong Man Morning Routine Audio",
      price: "₦5,000",
      link: "https://selar.com/strongmanmorning",
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
      name: "Reignite Her: Intimacy Restoration Conversation Ebook for Couples",
      price: "₦25,000",
      link: "https://selar.com/reigniteher",
    },
    {
      name: "Private Follow-Up Sessions",
      price: "₦15,000",

    },
    {
      name: "Stress, Cortisol & Your Manhood (Guide)",
      price: "₦9,000",
      link: "https://selar.com/stresscortisol",
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
          totalValue="₦99,000"
          coachingPrice="₦15,000"
          onCtaClick={scrollToRegister}
        />
      </div>
    </section>
  );
}
