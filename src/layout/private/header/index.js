
import React from 'react'
import styled, { css } from "styled-components"
import { Button, Layout, Menu } from 'antd'
import ThemeSwitcher from '../../theme'
import { Mobile } from '../../../common/responsive'
import { useDrawer } from '../../../common/drawer'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  TeamOutlined,
  MoreOutlined
} from '@ant-design/icons'
import { useSelector } from 'react-redux'

const { Header } = Layout

const HeadBlock = styled(Header)`
  padding: 0px 16px 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row-reverse;
  h1 {
    margin: 0;
    font-size: 21px;
    color: #868e96;
  }
  position: fixed; 
  top: 0;
  right: 0;
  z-index: 1000;

  left: 0px;
  ${({ collapsed }) => collapsed === true && css`left: 80px;`}
  ${({ collapsed }) => collapsed === false && css`left: 200px;`}

  transition: all 0.2s;
`

const Logo = styled.div`
  height: 200px;
  width: auto;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ src }) =>
    src && css`
      background-image: url(${src});
  `}
  transition: all 0.2s;
`;

const Head = ({ collapsed }) => {
  const today = new Date().toLocaleDateString();
  const { name } = useSelector(state => state.theme)
  const { showDrawer, renderDrawer } = useDrawer()
  const location = useLocation()

  return (
    <HeadBlock collapsed={collapsed}>
      <ThemeSwitcher />
      <h1>{today}</h1>
      <Mobile>
        <Button type="primary" onClick={showDrawer}>
          <MoreOutlined onClick={showDrawer}/>
        </Button>
        {renderDrawer({
          render: () => {
            return <Menu
              theme={name}
              mode="inline"
              selectedKeys={[location.pathname]}
            >
              <Logo src={`${process.env.PUBLIC_URL}/logo.png`} />
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
          }
        })}
      </Mobile>
    </HeadBlock>
  )
}

export default Head
