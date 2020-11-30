
import React from 'react'
import styled, {css} from "styled-components"
import { Layout, Switch } from 'antd'

const { Header } = Layout

const HeadBlock = styled(Header)`
  background: rgb(255, 255, 255);
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

  left: 200px;
  ${({ collapsed }) =>
    collapsed &&
    css`
        left: 80px;
      `}
  transition: all 0.2s;
`

const Head = ({ collapsed }) => {
  const today = new Date().toLocaleDateString();

  return (
    <HeadBlock collapsed={collapsed}>
      <h1>{today}</h1>
    </HeadBlock>
  )
}

export default Head
