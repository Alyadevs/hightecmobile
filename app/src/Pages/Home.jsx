// src/Home.js
import React from 'react';
import { Layout } from 'antd';
import Login from './Login';

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      
        {/* <div className="container mx-auto">
        <img src={'src/assets/logo.png'} alt="HighTec Products" className="w-full rounded-md shadow-lg" width={50} height={50}/>
          <h1 className="text-4xl font-bold">HighTec</h1>
          <p className="text-xl">Leading the Future of Technology</p>
        </div> */}
{/*      

      <Content className="container py-8 mx-auto">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Welcome to HighTec</h2>
            <p className="text-lg">
              HighTec is a cutting-edge technology company that specializes in creating innovative solutions for businesses and individuals.
            </p>
            <p className="text-lg">
              Our team of experts is committed to pushing the boundaries of technology and delivering the best products and services to our clients.
            </p>
          </div>
          <div>
            {/* Insert high-tech-related image here */}
          
          {/* </div>
        </section>
      </Content> */}
<Login/>
      
    </Layout>
  );
};

export default Home;
