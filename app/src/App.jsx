// src/App.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Components/sidebar';
import Login from './Pages/Login';
import './App.css'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 

import Laayout from './Components/Laayout';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import Footeer from './Components/Footer';
import EditProduct from './Pages/EditProduct';
import AddProduct from './Pages/AddProduct';
import Product from './Pages/Product'
import SignUp from './Pages/SignUp';

const { Content } = Layout;

const App = ({ children }) => {
  return (
    <div className='page' >
    <Layout >
      <Laayout /> 
      <Layout>
        <Content style={{ padding: '24px', minHeight: '100vh' }}>
        { children }
        {/* <div className="flex items-center justify-center h-screen">
      <div className="w-96"> */}
      <Router>
       
        <Routes>
        <Route exact path="/Login" element={<Login/>} />
         <Route exact path="/signup" element={<SignUp/>} /> 
        <Route exact path="/Cart" element={<Cart/>} />
        <Route exact path="/" element={<Home/>} />
        
        <Route exact path="/EditProduct/:id" element={<EditProduct/>} />
        <Route exact path="/AddProduct" element={<AddProduct/>} />
        <Route exact path="/product" element={<Product/>} />
        

        </Routes>
        </Router>
          
        {/* </div>
        </div> */}
   
   <Footer />
        </Content>
       
      </Layout>
    </Layout>
    </div>
  );
};

export default App;
