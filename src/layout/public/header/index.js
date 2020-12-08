
import React from 'react'
import ThemeSwitcher from '../../theme'
import { HeadBlock } from './index.styled'

const Head = ({ collapsed }) => {
  const today = new Date().toLocaleDateString()

  return (
    <HeadBlock collapsed={collapsed}>
      <ThemeSwitcher />
      <h1>{today}</h1>
    </HeadBlock>
  )
}

export default Head
