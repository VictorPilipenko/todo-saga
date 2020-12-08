import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import {
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Logo, SiderBlock } from './index.styled';

const App = ({ collapsed, onCollapse }) => {
  const location = useLocation()
  return (
    <SiderBlock
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Logo src={`${process.env.PUBLIC_URL}/logo.png`} collapsed={collapsed}/>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/todo" danger={true} title={'Home'}>
          <HomeOutlined />
          <span>Home</span>
          <Link to="/todo"></Link>
        </Menu.Item>
        <Menu.Item key="/users" title={'some of users'}>
          <TeamOutlined />
          <span>Users</span>
          <Link to="/users"></Link>
        </Menu.Item>
      </Menu>
    </SiderBlock>
  );
};

export default App