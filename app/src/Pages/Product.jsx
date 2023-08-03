import React from 'react';
import Cart from './Cart';

const productsInCart = [
  {
    name: 'Product 1',
    description: 'This is the description of Product 1.',
    image: '../assets/chat.jpg',
  },
 
  {
    name: 'Product 2',
    description: 'This is the description of Product 2.',
    image: 'chat.jpg',
  },
  {
    name: 'Product 2',
    description: 'This is the description of Product 2.',
    image: 'chat.jpg',
  },
  {
    name: 'Product 2',
    description: 'This is the description of Product 2.',
    image: 'chat.jpg',
  },
  {
    name: 'Product 2',
    description: 'This is the description of Product 2.',
    image: 'chat.jpg',
  },
  {
    name: 'Product 2',
    description: 'This is the description of Product 2.',
    image: 'chat.jpg',
  },
  // Add more product objects here as needed
];

const App = () => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      <Cart products={productsInCart} />
    </div>
  );
};

export default App;
