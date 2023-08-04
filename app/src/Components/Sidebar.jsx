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
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingOutlined />}>
         Product
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />}>
          Services
        </Menu.Item>
        <Menu.Item key="5" icon={<PhoneOutlined />}>
          Contact
        </Menu.Item>
        <Menu.Item key="6" icon={<LogoutOutlined/>}>
          LogOut
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default Sidebar;
