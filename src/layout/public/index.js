import React, { useState } from 'react'
import styled, { css } from "styled-components";
import { Layout } from 'antd'
import Sider from './sider'
import Footer from './footer'
import Header from './header'

const { Content } = Layout

const ContentBlock = styled(Content)`
  margin: 100px 20px 16px;
  position: relative;
`;
const LayoutBlock = styled(Layout)`
  min-height: 100vh;
`;
const LayoutInner = styled(Layout)`
  transition: all 0.2s;
  margin-left: 200px;
  ${({ collapsed }) =>
    collapsed &&
      css`
        margin-left: 80px;
      `}
`;


const PublicLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed) => setCollapsed(collapsed)

  return (
    <LayoutBlock>
      <Sider collapsed={collapsed} onCollapse={onCollapse} />
      <LayoutInner collapsed={collapsed}>
        <Header collapsed={collapsed}/>
        <ContentBlock>
          {children}
        </ContentBlock>
        <Footer />
      </LayoutInner>
    </LayoutBlock>
  )
}

export default PublicLayout
