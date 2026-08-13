import SectionTitle from '../ui/SectionTitle';
import BonusCard from '../ui/BonusCard';

export default function Bonuses() {
  const bonuses = [
    { title: "Men's Performance Checklist" },
    { title: "ED Risk Assessment" },
    { title: "Habit Tracker" },
    { title: "Nutrition Guide" },
    { title: "Exercise Starter Plan" },
    { title: "Questions to Ask Your Doctor" },
    { title: "Live Q&A Access" },
  ];

  return (
    <section id="bonuses" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Everything You Receive" 
          subtitle="Join the program and get access to these premium bonuses designed to accelerate your results."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {bonuses.map((bonus, index) => (
            <BonusCard 
              key={index}
              title={bonus.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
