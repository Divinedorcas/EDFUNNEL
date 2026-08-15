import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

import testimony1 from '../../assets/testimony1.png';
import testimony2 from '../../assets/testimony2.png';
import testimony3 from '../../assets/testimony3.png';
import testimony4 from '../../assets/testimony4.png';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Client",
      screenshot: testimony1,
      rating: 5,
    },
    {
      name: "Client",
      screenshot: testimony2,
      rating: 5,
    },
    {
      name: "Client",
      screenshot: testimony3,
      rating: 5,
    },
    {
      name: "Client",
      screenshot: testimony4,
      rating: 5,
    },
  ];

  return (
    <section id="testimonies" className="py-20 bg-background border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Real Results from Real Men"
          subtitle="Don't just take our word for it — here's what clients are saying."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              {...testimonial}
            />
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10 max-w-md mx-auto">
          Screenshots shared with permission. Results reflect individual experiences.
        </p>
      </div>
    </section>
  );
}
