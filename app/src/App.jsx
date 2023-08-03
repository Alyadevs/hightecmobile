// src/App.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Components/sidebar';
import Login from './Pages/Login';
import './App.css'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Pages/Register';

import Laayout from './Components/Laayout';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import Footeer from './Components/Footer';
const { Content } = Layout;

const App = ({ children }) => {
  return (
    <Layout >
      <Laayout /> 
      <Layout>
        <Content style={{ padding: '24px', minHeight: '100vh' }}>
        { children }
        <div className="flex items-center justify-center h-screen">
      <div className="w-96">
      <Router>
        <Routes>
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/Product" element={<Cart/>} />
        

        </Routes>
        </Router>
          
        </div>
        </div>
   
          
        </Content>
        <Footeer />
      </Layout>
    </Layout>
  );
};

export default App;
