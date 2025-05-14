import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-3">
          Our Collections
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our premium selections of traditional Gulf clothing for the entire family, crafted with attention to detail and cultural authenticity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl shadow-lg">
              {/* Image Container */}
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-200 mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <Link 
                  to={`/category/${category.slug}`}
                  className="inline-block bg-white text-[#1a365d] py-2 px-6 rounded-full font-medium transition-all hover:bg-[#c9a55c] hover:text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;