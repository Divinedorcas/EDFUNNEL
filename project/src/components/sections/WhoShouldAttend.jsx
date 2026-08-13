import { FaMale, FaChartLine, FaShieldAlt, FaLeaf, FaSmile } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import FeatureCard from '../ui/FeatureCard';

export default function WhoShouldAttend() {
  const audience = [
    { icon: FaMale, title: 'Men experiencing ED' },
    { icon: FaChartLine, title: 'Men over 35' },
    { icon: FaMale, title: 'Men who want to top their Game' },
    { icon: FaShieldAlt, title: 'Men wanting preventive health knowledge' },
    { icon: FaLeaf, title: 'Men seeking lifestyle improvements' },
    { icon: FaSmile, title: 'Men wanting greater confidence' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Who Should Attend?"
          subtitle="This program is designed for men who are ready to take control of their health."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center">
          {audience.map((item, index) => (
            <div key={index} className={index === audience.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <FeatureCard
                icon={item.icon}
                title={item.title}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
