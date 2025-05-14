import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getProduct } = useCart();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#1a365d] mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold">
                    Cart Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>
                </div>
                
                <ul className="divide-y">
                  {cart.map((item, index) => {
                    const product = getProduct(item.productId);
                    if (!product) return null;
                    
                    return (
                      <li key={`${item.productId}-${item.size}-${item.color}`} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                        {/* Product Image */}
                        <Link to={`/product/${product.id}`} className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-6 mb-4 sm:mb-0">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover object-center"
                          />
                        </Link>
                        
                        {/* Product Info */}
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <Link 
                                to={`/product/${product.id}`}
                                className="text-lg font-medium text-gray-900 hover:text-[#1a365d]"
                              >
                                {product.name}
                              </Link>
                              <div className="text-sm text-gray-600 mt-1">
                                Size: {item.size} | Color: {item.color}
                              </div>
                              <div className="mt-1 font-medium">
                                ${(product.salePrice || product.price).toFixed(2)}
                              </div>
                            </div>
                            
                            <button 
                              onClick={() => removeFromCart(index)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <X size={18} />
                            </button>
                          </div>
                          
                          {/* Quantity Control */}
                          <div className="mt-4 flex items-center">
                            <label className="mr-3 text-sm text-gray-600">Qty:</label>
                            <div className="flex items-center border rounded">
                              <button
                                onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(index, Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-12 h-8 text-center border-x focus:outline-none"
                              />
                              <button
                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                
                <div className="p-6 border-t bg-gray-50">
                  <Link to="/" className="text-[#1a365d] font-medium hover:text-[#c9a55c]">
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-xl font-bold text-[#1a365d]">
                        ${getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="primary" fullWidth size="lg">
                    Proceed to Checkout
                  </Button>
                </div>
                
                {/* Promotion Code */}
                <div className="p-6 border-t">
                  <h3 className="font-medium mb-3">Promotion Code</h3>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                    />
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-300">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;