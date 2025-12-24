import React from 'react';
import { Layout, Home, PenTool, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Residential Design",
      description: "From cozy apartments to sprawling villas, we create homes that are as comfortable as they are beautiful.",
      icon: <Home size={40} />
    },
    {
      title: "Commercial Space",
      description: "Functional and inspiring office designs that enhance productivity and reflect your brand identity.",
      icon: <BarChart size={40} />
    },
    {
      title: "Space Planning",
      description: "Optimizing layouts to ensure every square foot is utilized effectively without compromising on flow.",
      icon: <Layout size={40} />
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture pieces designed specifically for your space and style requirements.",
      icon: <PenTool size={40} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Comprehensive interior design solutions tailored to meet your unique needs and preferences.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="mb-6 text-accent group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 inline-block bg-accent/10 p-4 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
