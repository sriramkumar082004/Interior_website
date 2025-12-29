import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Elevate Your <span className="text-accent">Living Space</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
          Experience the perfect blend of luxury, comfort, and functionality with our award-winning interior design services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-full transition-colors shadow-lg flex items-center justify-center"
          >
            View Projects <ArrowRight className="ml-2" size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold rounded-full transition-colors flex items-center justify-center"
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
