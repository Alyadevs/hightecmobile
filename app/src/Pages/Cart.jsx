import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import '../Styles/cart.css';
import { AiOutlineSearch, AiOutlineEdit, AiOutlineDelete, AiOutlineFolderAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [productts, setProducts] = useState([]); // State for holding the fetched product data

  useEffect(() => {
    // Fetch product data from the backend
    axios
      .get('/api/product') // Replace '/api/product' with your actual API endpoint for fetching products
      .then((response) => {
        setProducts(response.data); // Set the fetched product data to the state
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, []);

  const handleDelete = (productId) => {
    axios
      .delete(`/api/product/${productId}`)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <>
      <div className='pageprod' id='product'>
        <div className='productdiv'>
          <div className='Search'>
            <input type='text' placeholder='Search Product here...' />
            {/* <AiOutlineClose onClick={() => setsearchValue("")} style={{ cursor: "pointer" }} size={14} /> */}
            <button>
              <AiOutlineSearch color='white' style={{ cursor: 'pointer' }} size={18} />
            </button>
          </div>
         hgjhgjfhgret
           <div
            className='grid grid-cols-3 gap-4 p-4'
            style={{
              width: '150%',
              marginLeft: '-160px',
              marginRight: 'auto',
              paddingTop: 10,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          > 
            {productts.map((product) => (
              <div
                key={product._id}
                className='flex flex-col p-4 border border-gray-200 rounded shadow-md'
                style={{ minWidth: 240, maxWidth: 240 }}
              >
                
                <div className='cart-item'>
                  <img
                    alt={product.name}
                    src={product.image}
                    className='flex-shrink-0 object-contain w-full h-40 mb-4'
                  />
                  
                  <div className='cart-item-description'>
                    {/* <h2 className='mb-2 text-lg font-bold'>{product.name}</h2>
                    <p className='flex-grow text-gray-900'> {product.description}</p> */}
                  
                  </div>
                  <Link to={`/edit/${product._id}`}>
                    <AiOutlineEdit />
                  </Link>
                  <Link
                    className='delete'
                    onClick={() => handleDelete(product._id)}
                  >
                    <AiOutlineDelete />
                  </Link>
                  <a href='#'>
                    <AiOutlineFolderAdd />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='for_navigation'>
          <motion.div
            whileHover={{
              rotate: 5,
            }}
            className='leftarrowpiezza'
          >
            <HiOutlineArrowNarrowLeft size={40} color='#ee2d00' />
          </motion.div>
          <motion.div
            whileHover={{
              rotate: -5,
            }}
            className='rightarrowpiezza'
          >
            <HiOutlineArrowNarrowRight size={40} color='#ee2d00' />
          </motion.div>
        </div>
       </div> 
    </>
  );
};

export default Cart;
