import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import '../Styles/cart.css';
import { AiOutlineSearch, AiOutlineEdit, AiOutlineDelete, AiOutlineFolderAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [productts, setProducts] = useState([]); // State for holding the fetched product data
  const [searchQuery, setSearchQuery] = useState('')
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
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }
 
  const handleDelete = (productId) => { 
    axios
      .delete(`/api/product/${productId}`, {headers: {
        "x-user-id": user._id,
      },})
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
    <div className='container'>
      <div className='pageprod' id='product'>
        <div className='productdiv'>
          <div className='Search'>
          <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-200 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-100 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" value={searchQuery}
          onChange={handleSearchChange}/>
            {/* <AiOutlineClose onClick={() => setsearchValue("")} style={{ cursor: "pointer" }} size={14} /> */}
            <button>
              <AiOutlineSearch color='white' style={{ cursor: 'pointer' }} size={18} />
            </button>
            <Link to='/AddProduct'>
                    <AiOutlineFolderAdd style={{width : '10%' , height : '10%' }}/>
                  </Link>
          </div>
      
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
                     <h2 className='mb-2 text-lg font-bold'>{product.name}</h2>
                    <p className='flex-grow text-gray-900'> {product.description}</p>
                   
                  </div>
                  <div className="croud">
                  <Link to={`/EditProduct/${product._id}`}>
                    <AiOutlineEdit />
                  </Link>
                  <Link
                    className='delete'
                    onClick={() => handleDelete(product._id)}
                  >
                    <AiOutlineDelete />
                  </Link>
                 
                  </div>
                </div>
              </div>
            ))}
             
          </div>
        
        </div>
         {/* <div className='for_navigation'>
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
        </div> */}
       </div>  
       </div>
    </>
  );
};

export default Cart;
