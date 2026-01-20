import React from 'react';
import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', price: 'KES 50', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: 'KES 120', category: 'Dairy', inStock: true },
  { id: 3, name: 'Mango', price: 'KES 80', category: 'Fruits', inStock: true },
  { id: 4, name: 'Yogurt', price: 'KES 180', category: 'Dairy', inStock: false },
  { id: 5, name: 'Sukuma Wiki', price: 'KES 30', category: 'Vegetables', inStock: true },
  { id: 6, name: 'Tomatoes', price: 'KES 50', category: 'Vegetables', inStock: true },
  { id: 7, name: 'Ugali Flour', price: 'KES 95', category: 'Grains', inStock: true },
  { id: 8, name: 'Rice', price: 'KES 140', category: 'Grains', inStock: true },
  { id: 9, name: 'Passion', price: 'KES 60', category: 'Fruits', inStock: true },
  { id: 10, name: 'Cabbage', price: 'KES 40', category: 'Vegetables', inStock: true },
  { id: 11, name: 'Chai Masala', price: 'KES 200', category: 'Beverages', inStock: true },
  { id: 12, name: 'Oranges', price: 'KES 100', category: 'Fruits', inStock: false },
  { id: 13, name: 'Butter', price: 'KES 280', category: 'Dairy', inStock: true },
  { id: 14, name: 'Avocado', price: 'KES 70', category: 'Fruits', inStock: true },
  { id: 15, name: 'Spinach', price: 'KES 35', category: 'Vegetables', inStock: true }
]; 
const ProductList = ({ category, cartItems, onAddToCart, darkMode }) => {
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === category);

  if (filteredProducts.length === 0) {
    return <p>No products available</p>;
  }

  return filteredProducts.map(product => (
    <ProductCard
      key={product.id}
      product={product}
      onAddToCart={onAddToCart}
      isInCart={cartItems.some(item => item.id === product.id)}
      darkMode={darkMode}
    />
  ));
};

export default ProductList;
