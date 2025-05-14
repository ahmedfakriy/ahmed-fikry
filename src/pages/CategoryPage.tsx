import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductList from '../components/product/ProductList';
import { Category, Product } from '../types';
import { Filter, ChevronDown } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | undefined>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('featured');
  
  // Get all unique sizes from products
  const allSizes = Array.from(
    new Set(products.flatMap(product => product.sizes))
  ).sort();
  
  useEffect(() => {
    if (slug) {
      const foundCategory = categories.find(c => c.slug === slug);
      setCategory(foundCategory);
      
      let filtered = products.filter(p => p.category === slug);
      
      // Apply price filter
      filtered = filtered.filter(
        p => (p.salePrice || p.price) >= priceRange[0] && (p.salePrice || p.price) <= priceRange[1]
      );
      
      // Apply size filter
      if (selectedSizes.length > 0) {
        filtered = filtered.filter(p => 
          p.sizes.some(size => selectedSizes.includes(size))
        );
      }
      
      // Apply sorting
      switch (sortOption) {
        case 'price-low':
          filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
          break;
        case 'price-high':
          filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
          break;
        case 'newest':
          filtered = filtered.filter(p => p.new).concat(filtered.filter(p => !p.new));
          break;
        default: // featured
          filtered = filtered.filter(p => p.featured).concat(filtered.filter(p => !p.featured));
      }
      
      setFilteredProducts(filtered);
    }
  }, [slug, priceRange, selectedSizes, sortOption]);
  
  const toggleSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };
  
  if (!category) {
    return <div className="py-20 text-center">Category not found</div>;
  }
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Banner */}
      <div className="relative h-64 bg-gray-800 mb-8">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="max-w-xl mx-auto">{category.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden w-full mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border"
            >
              <span className="flex items-center">
                <Filter size={18} className="mr-2" />
                Filter Products
              </span>
              <ChevronDown 
                size={18} 
                className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          
          {/* Filters - Sidebar */}
          <div className={`md:w-1/4 ${isFilterOpen || window.innerWidth >= 768 ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="font-semibold text-lg mb-4 pb-2 border-b">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#1a365d]"
                />
              </div>
              
              {/* Sizes */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1 border rounded-md ${
                        selectedSizes.includes(size) 
                          ? 'bg-[#1a365d] text-white border-[#1a365d]' 
                          : 'bg-white text-gray-800 border-gray-300 hover:border-[#1a365d]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Sort Order (for mobile only) */}
              <div className="mb-6 md:hidden">
                <h3 className="font-medium mb-3">Sort By</h3>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="md:w-3/4">
            {/* Sort dropdown (desktop) */}
            <div className="hidden md:flex justify-end mb-6">
              <div className="inline-flex items-center">
                <span className="mr-2 text-gray-700">Sort by:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductList products={filteredProducts} />
            ) : (
              <div className="py-20 text-center text-gray-500">
                No products match your filters. Try adjusting your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;