
import React from 'react'
import styled from "styled-components"
import { Layout } from 'antd'
import ThemeSwitcher from '../../theme'

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
  left: 0;
`

const Head = ({ collapsed }) => {
  const today = new Date().toLocaleDateString();

  return (
    <HeadBlock collapsed={collapsed}>
      <ThemeSwitcher />
      <h1>{today}</h1>
    </HeadBlock>
  )
}

export default Head
