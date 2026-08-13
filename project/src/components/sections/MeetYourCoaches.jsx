import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

import coachDorcas from '../../assets/coach_dorcas.jpeg';
import coachFo from '../../assets/coach_fo.jpeg';
import coachMaryam from '../../assets/coach_maryam.jpeg';

export default function MeetYourCoaches() {
  const coaches = [
    {
      role: "Lead Coach",
      name: "Coach Dorcas Oguche",
      title: "Lead Wellness Coach & Men's Health Educator",
      bio: "Coach Dorcas is a certified wellness coach and founder of the Men's Health Reset Hub. She is passionate about helping men understand the lifestyle factors that influence energy, vitality, cardiovascular health, and sexual wellness. Through practical education and personalized guidance, she empowers men to build healthier habits, reduce health risks, and regain confidence.",
      image: coachDorcas
    },
    {
      role: "Coach",
      name: "Fehnitola Onogoruwa",
      title: "Global wWellness & Leadership Stratagist",
      bio: "Fehintola Onagoruwa, widely known as Coach FO, is an internationally recognized Wellness Entrepreneur, Network Marketing Mentor, and Leadership Strategist with over 25 years of experience transforming lives across Africa, North America, and Europe. From her beginnings as a Registered Nurse, Midwife, and former Medical Military Personnel in the Nigerian Air Force, she has built a remarkable journey into entrepreneurship, creating Hayil Consult Limited—a wellness and lifestyle consultancy that helps individuals and organizations prevent lifestyle diseases, extend vitality, and thrive in retirement.",
      image: coachFo
    },
    {
      role: "Coach",
      name: "Coach Maryam",
      title: "Heart Health Wellness & Life Coach",
      bio: "Coach Maryam is a passionate Life and Wellness Coach dedicated to helping people live healthier, stronger, and more fulfilling lives. She specializes in heart health education, empowering individuals with practical knowledge about healthy lifestyle choices, heart disease prevention, and overall well-being. Through her coaching and education, she inspires people to take proactive steps toward protecting their hearts and improving their quality of life.",
      image: coachMaryam
    },
  ];

  return (
    <section id='coaches' className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Meet Your Coaches"
          subtitle="Learn From Experienced Professional Dedicated to Helping You Improve Your Health, Confidence, and Well-Being"
        />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600">
            A combination of expertise in wellness, nutrition, preventive health, and healthy lifestyle strategies to guide you through your Men's Performance Reset journey.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center text-center transition-all duration-300 relative group"
            >
              {/* Role Badge */}
              <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${coach.role === 'Lead Coach'
                ? 'bg-blue-100 text-blue-800 border border-blue-200'
                : 'bg-gray-100 text-gray-800 border border-gray-200'
                }`}>
                {coach.role}
              </span>

              {/* Profile Image (120-160px circular) */}
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner flex-shrink-0">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-primary mb-1">
                {coach.name}
              </h3>

              {/* Professional Title */}
              <p className="text-sm font-semibold text-accent mb-4">
                {coach.title}
              </p>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {coach.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reassuring message at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-blue-50 border border-blue-100/60 rounded-2xl p-6 md:p-8 text-center"
        >
          <p className="text-sm text-blue-900 leading-relaxed">
            You're learning from a multidisciplinary team committed to helping you build healthier habits, better understand your body, and take practical steps toward improved health and confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
