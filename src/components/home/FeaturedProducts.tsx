import React from 'react';
import { products } from '../../data/products';
import ProductList from '../product/ProductList';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-3">
          Featured Products
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our handpicked selection of premium items that exemplify the elegance and craftsmanship of traditional Gulf fashion.
        </p>
        
        <ProductList products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;