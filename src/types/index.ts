export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women' | 'children';
  price: number;
  salePrice?: number;
  image: string;
  images?: string[];
  description: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}