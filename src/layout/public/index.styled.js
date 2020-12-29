import styled from 'styled-components'
import { Layout } from 'antd'

const { Content } = Layout

export const ContentBlock = styled(Content)`
  margin: 100px 20px 16px;
  position: relative;
`

export const LayoutBlock = styled(Layout)`
  min-height: 100vh;
`

export const LayoutInner = styled(Layout)`
  transition: all 0.2s;
`
