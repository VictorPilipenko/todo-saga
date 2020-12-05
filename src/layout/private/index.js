import React, { useState } from 'react'
import styled, { css } from "styled-components";
import { Layout } from 'antd'
import Sider from './sider'
import Footer from './footer'
import Header from './header'
import { Default, Mobile } from '../../common/responsive';

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
  margin-left: 0px;
  ${({ collapsed }) => collapsed === true && css`margin-left: 80px;`}
  ${({ collapsed }) => collapsed === false && css`margin-left: 200px;`}
`;


const PrivateLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed) => setCollapsed(collapsed)

  return (
    <LayoutBlock>

      <Default>
        <Sider collapsed={collapsed} onCollapse={onCollapse} />
        <LayoutInner collapsed={collapsed}>
          <Header collapsed={collapsed} />
          <ContentBlock>
            {children}
          </ContentBlock>
          <Footer />
        </LayoutInner>
      </Default>
      
      <Mobile>
        <LayoutInner>
          <Header />
          <ContentBlock>
            {children}
          </ContentBlock>
          <Footer />
        </LayoutInner>
      </Mobile>

    </LayoutBlock>
  )
}

export default PrivateLayout
