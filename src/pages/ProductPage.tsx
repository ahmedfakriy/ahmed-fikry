import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, Heart, Share2, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import Badge from '../components/ui/Badge';
import ProductList from '../components/product/ProductList';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  // Get related products
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];
  
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      if (product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
      if (product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
    }
  }, [product]);
  
  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart(product.id, selectedSize, selectedColor, quantity);
      alert('Product added to cart!');
    } else {
      alert('Please select size and color');
    }
  };
  
  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to={`/category/${product.category}`}
            className="inline-flex items-center text-gray-600 hover:text-[#1a365d]"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to {product.category}'s Collection
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`aspect-square bg-gray-100 rounded-md overflow-hidden border-2 ${
                      selectedImage === image ? 'border-[#1a365d]' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-3">
              {product.new && <Badge variant="new">New</Badge>}
              {product.salePrice && <Badge variant="sale">Sale</Badge>}
              {product.bestseller && <Badge variant="success">Best Seller</Badge>}
            </div>
            
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {/* Price */}
            <div className="flex items-baseline mb-6">
              {product.salePrice ? (
                <>
                  <span className="text-2xl font-bold text-[#c9a55c] mr-2">
                    ${product.salePrice}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.price}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size 
                        ? 'bg-[#1a365d] text-white border-[#1a365d]' 
                        : 'bg-white text-gray-800 border-gray-300 hover:border-[#1a365d]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Colors */}
            <div className="mb-8">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedColor === color 
                        ? 'bg-[#1a365d] text-white border-[#1a365d]' 
                        : 'bg-white text-gray-800 border-gray-300 hover:border-[#1a365d]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 border-t border-b text-center focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Button>
              <Button variant="ghost" size="lg">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </Button>
            </div>
            
            {/* Size Guide */}
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Size Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Please refer to our size guide to find your perfect fit. Measurements are in inches.
              </p>
              <Button variant="ghost" size="sm">View Size Guide</Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1a365d] mb-6">You Might Also Like</h2>
            <ProductList products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;