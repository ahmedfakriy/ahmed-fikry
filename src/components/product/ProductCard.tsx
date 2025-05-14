import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import Badge from '../ui/Badge';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <Link to={`/product/${product.id}`}>
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && <Badge variant="new">New</Badge>}
          {product.salePrice && <Badge variant="sale">Sale</Badge>}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-2 right-2">
          <button 
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="mt-3">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-gray-800 font-medium transition-colors group-hover:text-[#1a365d]">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-baseline">
            {product.salePrice ? (
              <>
                <span className="text-[#c9a55c] font-semibold">
                  ${product.salePrice}
                </span>
                <span className="ml-2 text-gray-500 text-sm line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-gray-900 font-semibold">
                ${product.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;