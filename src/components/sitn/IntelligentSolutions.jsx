import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Bot, Zap } from 'lucide-react';

const solutions = [
  {
    icon: BrainCircuit,
    title: "Talent Sift (AI)",
    description: "Harness AI to streamline and enhance your talent acquisition and resume screening processes."
  },
  {
    icon: Bot,
    title: "My Buddy",
    description: "Boost productivity with a smart chat assistant that supports your team anytime."
  },
  {
    icon: Zap,
    title: "Easy Automate",
    description: "Automate hiring, onboarding, and offboarding for a seamless HR experience."
  }
];

const IntelligentSolutions = ({ onFeatureClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="solutions" className="py-4 md:py-6 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" style={{ color: 'black' }}>Our Intelligent Solutions</h2>
        <div className="section-title-underline"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="info-card text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              onClick={onFeatureClick}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#1E2A5E] flex items-center justify-center">
                  <solution.icon className="w-10 h-10 text-[#67E8F9]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;