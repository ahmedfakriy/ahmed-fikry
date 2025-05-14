import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { products } from '../data/products';
import ProductList from '../components/product/ProductList';

const HomePage: React.FC = () => {
  const newArrivals = products.filter(product => product.new).slice(0, 4);
  const bestSellers = products.filter(product => product.bestseller).slice(0, 4);
  
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-3">
            New Arrivals
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Be the first to discover our latest traditional pieces, crafted with meticulous attention to detail.
          </p>
          
          <ProductList products={newArrivals} />
          
          <div className="text-center mt-10">
            <a 
              href="/new-arrivals" 
              className="inline-block border-b-2 border-[#1a365d] text-[#1a365d] font-medium pb-1 hover:border-[#c9a55c] hover:text-[#c9a55c] transition-colors"
            >
              View All New Arrivals
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-3">
            Best Sellers
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our most loved pieces, chosen by customers who appreciate authentic Gulf craftsmanship.
          </p>
          
          <ProductList products={bestSellers} />
          
          <div className="text-center mt-10">
            <a 
              href="/best-sellers" 
              className="inline-block border-b-2 border-[#1a365d] text-[#1a365d] font-medium pb-1 hover:border-[#c9a55c] hover:text-[#c9a55c] transition-colors"
            >
              View All Best Sellers
            </a>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;