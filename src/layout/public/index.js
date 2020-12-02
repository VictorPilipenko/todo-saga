import React from 'react'
import styled, { css } from "styled-components";
import { Layout } from 'antd'
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
`;


const PublicLayout = ({ children }) => {

  return (
    <LayoutBlock>
      <LayoutInner>
        <Header />
        <ContentBlock>
          {children}
        </ContentBlock>
        <Footer />
      </LayoutInner>
    </LayoutBlock>
  )
}

export default PublicLayout
