import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Testimonials from './components/Testimonials';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      <WhatsAppButton />
    </div>
  );
}

export default App;
