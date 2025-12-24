import React from 'react';
import {  Layout, Home, PenTool, BarChart } from 'lucide-react';

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

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to meet your unique needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
