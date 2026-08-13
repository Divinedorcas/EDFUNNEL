import {
  FaBatteryEmpty,
  FaBed,
  FaHeartBroken,
  FaWeight,
  FaExclamationTriangle,
  FaBrain,
  FaFrown
} from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import FeatureCard from '../ui/FeatureCard';

export default function ProblemSection() {
  const problems = [
    { icon: FaFrown, title: 'Difficulty maintaining an erection' },
    { icon: FaHeartBroken, title: 'Reduced Libido' },
    { icon: FaBrain, title: 'Low confidence and self-esteem' },
    { icon: FaHeartBroken, title: 'Relationship stress' },
    { icon: FaBatteryEmpty, title: 'Low energy' },
    { icon: FaBed, title: 'Poor sleep' },
    { icon: FaWeight, title: 'Weight gain' },
    { icon: FaExclamationTriangle, title: 'Fear something is wrong' },
    { icon: FaHeartBroken, title: 'Diabetes, High blood pressure, High cholesterol or Fear of stroke or heart attack' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Does Any of This Sound Familiar?"
          subtitle="You are not alone. These are common challenges that many men face, but they don't have to be your permanent reality."
        />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <FeatureCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-primary">You're not alone.</p>
        </div>
      </div>
    </section>
  );
}
