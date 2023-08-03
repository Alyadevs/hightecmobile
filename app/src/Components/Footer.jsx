import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const Footeer = () => {
  return (
    <Footer className="py-2 text-center">
      <p className="text-gray-500">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </Footer>
  );
};

export default Footeer;
