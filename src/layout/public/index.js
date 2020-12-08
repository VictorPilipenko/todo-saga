import React from 'react'
import Footer from './footer'
import Header from './header'
import { ContentBlock, LayoutBlock, LayoutInner } from './index.styled'

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
