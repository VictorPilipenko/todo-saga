
import React, { useEffect, useState } from 'react'
import { Select } from 'antd'

import darkVars from '../../themes/dark.json';
import lightVars from '../../themes/light.json';

const ThemeSwitcher = () => {

  const [themeName, setThemeName] = useState(localStorage.getItem("theme-name") || 'light')
  const [vars, setVars] = useState(JSON.parse(localStorage.getItem("app-theme")) || lightVars)

  useEffect(() => {
    window.less.modifyVars(vars).catch(error => { })
  }, [])// eslint-disable-line

  return (
    <Select
      placeholder="Please select theme"
      value={themeName}
      onSelect={value => {
        let vars = value === 'light' ? lightVars : darkVars
        vars = { ...vars, '@white': '#fff', '@black': '#000' }
        setThemeName(value)
        setVars(vars)
        localStorage.setItem("app-theme", JSON.stringify(vars))
        localStorage.setItem("theme-name", value)
        window.less.modifyVars(vars).catch(error => { })
      }}
    >
      <Select.Option value="light">Light</Select.Option>
      <Select.Option value="dark">Dark</Select.Option>
    </Select>
  )
}

export default ThemeSwitcher
