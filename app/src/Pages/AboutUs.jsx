// src/AboutUs.js
import React from 'react';
import { Layout } from 'antd';
import { MobileOutlined, BulbOutlined, RocketOutlined } from '@ant-design/icons';

const { Content } = Layout;

const AboutUs = () => {
  return (
    <Layout>
      <Content className="container py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="text-center">
            <img src="image1.jpg" alt="Cutting-edge Mobile Technology" className="h-24 mx-auto mb-4" />
            <MobileOutlined className="mb-4 text-5xl text-blue-600" />
            <h3 className="text-xl font-bold">Cutting-edge Mobile Technology</h3>
            <p className="text-lg">
              We are at the forefront of mobile technology, creating innovative devices that enhance your digital experience.
            </p>
          </div>
          <div className="text-center">
            <img src="image2.jpg" alt="Innovation and Creativity" className="h-24 mx-auto mb-4" />
            <BulbOutlined className="mb-4 text-5xl text-blue-600" />
            <h3 className="text-xl font-bold">Innovation and Creativity</h3>
            <p className="text-lg">
              Our team of creative minds is dedicated to pushing the boundaries of what's possible in mobile technology.
            </p>
          </div>
          <div className="text-center">
            <img src="image3.jpg" alt="Expanding Horizons" className="h-24 mx-auto mb-4" />
            <RocketOutlined className="mb-4 text-5xl text-blue-600" />
            <h3 className="text-xl font-bold">Expanding Horizons</h3>
            <p className="text-lg">
              We are committed to exploring new horizons in mobile technology to deliver cutting-edge products to our customers.
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default AboutUs;
