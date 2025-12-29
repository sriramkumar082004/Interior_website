import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

import aboutDesigner from '../assets/about_interior_designer.png';

export default function About() {
  const stats = [
    { icon: <Clock size={32} />, value: "10+", label: "Years Experience" },
    { icon: <Users size={32} />, value: "500+", label: "Happy Clients" },
    { icon: <Award size={32} />, value: "25+", label: "Awards Won" },
    { icon: <ThumbsUp size={32} />, value: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <img 
              src={aboutDesigner} 
              alt="Interior Designer working" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-full -z-0 opacity-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="text-accent font-semibold uppercase tracking-wider mb-2">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Designing Spaces That Tell Your Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At LuxeInteriors, we believe that your home should be a reflection of who you are. With over a decade of experience, our team of passionate designers works tirelessly to transform your vision into reality.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in creating bespoke interiors that blend aesthetics with functionality. From modern minimalist apartments to luxurious classic villas, we handle every project with meticulous attention to detail and unwavering commitment to quality.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
                  <div className="text-accent">{stat.icon}</div>
                  <div>
                    <h5 className="font-bold text-xl text-primary">{stat.value}</h5>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
