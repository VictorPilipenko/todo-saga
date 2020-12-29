import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

export const HeadBlock = styled(Header)`
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
  left: 0;
`
