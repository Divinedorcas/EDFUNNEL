import { motion } from 'framer-motion';
import { FaHeartbeat, FaHeart, FaWeightHanging, FaAppleAlt, FaStethoscope } from 'react-icons/fa';

export default function WhyItMatters() {
  const conditions = [
    { text: 'Cardiovascular disease', icon: FaHeartbeat },
    { text: 'High blood pressure', icon: FaHeart },
    { text: 'Obesity', icon: FaWeightHanging },
    { text: 'Diabetes & Lifestyle factors', icon: FaAppleAlt },
    { text: 'Hormonal changes', icon: FaHeartbeat },
    { text: 'Prostate issues', icon: FaStethoscope },
  ];

  return (
    <section className="py-20 bg-blue-50/50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Illustration Column
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3] bg-white border border-gray-100 flex items-center justify-center"
            >
              {/* <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4 flex items-center justify-center text-primary">
                  [Illustration]
                </div>
                <p className="text-gray-500 font-medium">
                  Anatomy or health-related illustration placeholder
                </p>
              </div> */}
          {/* </motion.div>
      </div> */}

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why This Matters Beyond the Bedroom
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Erectile dysfunction is often the tip of the iceberg. You can be a few days away from; Stroke, Hypertension, Heart Attack and many more. Research shows that it can sometimes be an early warning sign associated with underlying conditions such as:
              </p>

              <ul className="space-y-4 mb-10">
                {conditions.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-accent w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              {/* 
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-sm text-yellow-800 font-medium flex items-start">
                  <span className="font-bold mr-2">Disclaimer:</span>
                  This coaching is educational and is not a substitute for medical diagnosis or treatment.
                </p>
              </div> */}
            </motion.div>
          </div>

        </div>
      </div >
    </section >
  );
}
