// src/Home.js
import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header className="py-4 text-white bg-blue-800">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">HighTec</h1>
          <p className="text-xl">Leading the Future of Technology</p>
        </div>
      </Header>

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
            <img src="placeholder_image.jpg" alt="HighTec Products" className="w-full rounded-md shadow-lg" />
          </div>
        </section>
      </Content>

      <Footer className="py-4 text-white bg-gray-900">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 HighTec. All rights reserved.</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default Home;
