
import React from 'react'
import styled, {css} from "styled-components"
import { Layout, Switch } from 'antd'
import { useThemeSwitcher } from 'react-css-theme-switcher';

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
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  return (
    <HeadBlock collapsed={collapsed}>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
      <h1>{currentTheme}</h1>
    </HeadBlock>
  )
}

export default Head
