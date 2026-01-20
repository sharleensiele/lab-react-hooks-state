import React, { useState } from 'react';
import ProductList, { sampleProducts } from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState('all');

  const handleAddToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const categories = ['all', ...new Set(sampleProducts.map(p => p.category))];

  const appStyle = {
    backgroundColor: darkMode ? '#1a202c' : '#f5f5f5',
    color: darkMode ? '#f7fafc' : '#1a202c',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
    padding: '2rem',
    textAlign: 'center'
  };

  const titleStyle = { fontSize: '2.5rem', marginBottom: '1rem' };
  const welcomeStyle = { marginBottom: '2rem', opacity: 0.8 };

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>🛒 Shopping App</h1>
      <p style={welcomeStyle}>
        Welcome! Browse groceries and add items to cart.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ marginRight: '1rem', fontWeight: '600' }}>Filter by Category: </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: `2px solid ${darkMode ? '#4a5568' : '#cbd5e0'}`,
            backgroundColor: darkMode ? '#2d3748' : 'white',
            color: darkMode ? '#f7fafc' : '#1a202c'
          }}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <ProductList
        category={category}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        darkMode={darkMode}
      />

      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
