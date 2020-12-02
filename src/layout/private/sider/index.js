import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import styled, { css } from "styled-components";

const { Sider } = Layout

const SiderBlock = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;
const Logo = styled.div`
  height: 200px;
  width: auto;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ src }) =>
    src && css`
      background-image: url(${src});
  `}
  ${({ collapsed }) =>
    collapsed && css`
      height: 80px;
  `}
  transition: all 0.2s;
`;

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
