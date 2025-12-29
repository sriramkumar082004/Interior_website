import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function EmailButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={scrollToContact}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-24 right-6 z-[60] bg-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow duration-300"
      aria-label="Scroll to Contact Form"
    >
      <Mail size={32} />
    </motion.button>
  );
}
