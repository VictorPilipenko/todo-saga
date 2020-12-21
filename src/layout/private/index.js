import { useState } from 'react'
import Sider from './sider'
import Footer from './footer'
import Header from './header'
import { Default, Mobile } from '../../common/responsive';
import { ContentBlock, LayoutBlock, LayoutInner } from './index.styled';

const PrivateLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)
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
