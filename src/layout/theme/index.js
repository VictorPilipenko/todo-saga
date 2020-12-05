
import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import darkVars from '../../themes/dark.json';
import lightVars from '../../themes/light.json';
import { changeBodyScrollbarTheme } from '../../config/overlayBodyScrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { appTheme } from '../../store/actions/theme';

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const { name } = useSelector(state => state.theme)
  const [vars, setVars] = useState(JSON.parse(localStorage.getItem("app-theme")) || lightVars)

  useEffect(() => {
    window.less.modifyVars(vars).catch(error => { })
    changeBodyScrollbarTheme(name)
  }, [])// eslint-disable-line

  useEffect(() => {
    changeBodyScrollbarTheme(name)
  }, [name])// eslint-disable-line

  return (
    <Select
      placeholder="Please select theme"
      value={name}
      onSelect={value => {
        let vars = value === 'light' ? lightVars : darkVars
        vars = { ...vars, '@white': '#fff', '@black': '#000' }
        dispatch(appTheme(value))
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
