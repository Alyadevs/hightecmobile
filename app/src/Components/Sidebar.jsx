// src/Sidebar.js
import React from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  PhoneOutlined,
  LogoutOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      width={200}
      className="site-layout-background"
      style={{ height: '100vh' }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
         <a href="/">Home</a> 
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingOutlined />}>
         <a href="/product">Product</a>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <a href="/about">About</a>
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />}>
          <a href="/services">Services</a>
        </Menu.Item>
        <Menu.Item key="5" icon={<PhoneOutlined />}>
         <a href="/contact">Contact</a> 
        </Menu.Item>
        <Menu.Item key="6" icon={<LogoutOutlined/>}>
         <a href="/Login">LogOut</a> 
        </Menu.Item>
       

      </Menu>
    </Sider>
  );
};

export default Sidebar;
