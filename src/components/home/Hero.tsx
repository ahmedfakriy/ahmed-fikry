import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden bg-[#f8f9fa]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] leading-tight mb-6 animate-fadeIn">
              Elegant Gulf Style <span className="text-[#c9a55c]">for the Modern Life</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 animate-fadeIn animation-delay-300">
              Discover our exclusive collection of authentic Gulf clothing blending traditional craftsmanship with contemporary designs.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-500">
              <Link to="/category/men">
                <Button size="lg" variant="primary">Men's Collection</Button>
              </Link>
              <Link to="/category/women">
                <Button size="lg" variant="outline">Women's Collection</Button>
              </Link>
              <Link to="/category/children">
                <Button size="lg" variant="outline">Children's Collection</Button>
              </Link>
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fadeIn animation-delay-700">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg" 
                  alt="Traditional Men's Wear" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7178602/pexels-photo-7178602.jpeg" 
                  alt="Modern Gulf Style" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg" 
                  alt="Women's Collection" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6647070/pexels-photo-6647070.jpeg" 
                  alt="Children's Collection" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;