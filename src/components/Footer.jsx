import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold font-sans block mb-4">
              Luxe<span className="text-accent">Interiors</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating timeless, elegant spaces that inspire and delight. Your vision, our expertise.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Residential Design</li>
              <li>Commercial Design</li>
              <li>Renovations</li>
              <li>Space Planning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Follow Us</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            <h4 className="text-lg font-semibold mb-4 text-accent">Newsletter</h4>
            <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-white text-sm"
                required
              />
              <button type="submit" className="w-full bg-accent hover:bg-yellow-600 text-white font-bold py-2 rounded-lg transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LuxeInteriors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
