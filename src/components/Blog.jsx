import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Interior Design Trends for 2025",
      excerpt: "Discover the colors, textures, and styles that are defining the future of interior spaces.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      date: "Oct 15, 2024",
      author: "Priya Sharma"
    },
    {
      id: 2,
      title: "How to Maximize Space in Small Apartments",
      excerpt: "Expert tips and tricks to make your compact living area feel open, airy, and functional.",
      image: "/cozy_bedroom.png",
      date: "Oct 08, 2024",
      author: "Rahul Verma"
    },
    {
      id: 3,
      title: "Sustainable Materials: A Greener Home",
      excerpt: "Eco-friendly choices for flooring, furniture, and decor that don't compromise on style.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
      date: "Sep 28, 2024",
      author: "Anjali Nair"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and news from the world of interior design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors duration-200">
                  <a href="#">{blog.title}</a>
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  {blog.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-accent font-semibold hover:text-orange-700 transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
