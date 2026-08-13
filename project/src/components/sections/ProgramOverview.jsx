import SectionTitle from '../ui/SectionTitle';
import Timeline from '../ui/Timeline';

export default function ProgramOverview() {
  const dayOne = [
    {
      title: "Understanding the Root Cause",
      description: "We dive deep into what ED actually is and why it happens.",
      points: [
        "What ED is",
        "Hidden causes",
        "Heart disease warning signs"
      ]
    },
    {
      title: "Lifestyle & Physiology",
      description: "How your daily habits affect your performance.",
      points: [
        "Lifestyle mistakes",
        "Stress & Sleep impact",
        "Weight & Blood flow connection",
        "Health screening checklist"
      ]
    }
  ];

  const dayTwo = [
    {
      title: "Your Men's Performance Reset Plan",
      description: "Actionable steps to rebuild your health and confidence.",
      points: [
        "Nutrition for performance",
        "Targeted Exercise",
        "Sleep optimization"
      ]
    },
    {
      title: "Sustainable Habits",
      description: "Building a foundation for long-term vitality.",
      points: [
        "Stress management",
        "Daily habits",
        "Supplements as part of a healthy lifestyle",
        "Personal 90-day reset plan"
      ]
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="The 2-Day Program Overview" 
          subtitle="A step-by-step breakdown of what you will learn and how you will reset your health."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Day 1 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-extrabold text-primary mb-8 flex items-center">
              <span className="bg-accent text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-xl">1</span>
              Day One
            </h3>
            <Timeline items={dayOne} />
          </div>

          {/* Day 2 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-extrabold text-primary mb-8 flex items-center">
              <span className="bg-accent text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-xl">2</span>
              Day Two
            </h3>
            <Timeline items={dayTwo} />
          </div>
        </div>
      </div>
    </section>
  );
}
