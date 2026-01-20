import React from 'react';

const ProductCard = ({ product, onAddToCart, isInCart, darkMode }) => {
  const cardStyle = {
    border: `2px solid ${darkMode ? '#4a5568' : '#e2e8f0'}`,
    borderRadius: '10px',
    padding: '1rem',
    margin: '1rem',
    display: 'inline-block',
    width: '200px',
    backgroundColor: darkMode ? '#2d3748' : 'white',
    color: darkMode ? '#f7fafc' : '#1a202c',
    opacity: product.inStock ? 1 : 0.6,
    textAlign: 'center'
  };

  return (
    <div style={cardStyle}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock || isInCart}
      >
        {isInCart ? '✓ In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
