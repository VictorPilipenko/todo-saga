import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import darkVars from '../../themes/dark.json'
import lightVars from '../../themes/light.json'
import { changeBodyScrollbarTheme } from '../../config/overlayBodyScrollbar'
import { appTheme } from '../../store/local/theme/actions'

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const { name } = useSelector((state) => state.theme)
  const [vars, setVars] = useState(
    JSON.parse(localStorage.getItem('app-theme')) || lightVars
  )

  useEffect(() => {
    window.less.modifyVars(vars).catch((error) => {})
    changeBodyScrollbarTheme(name)
  }, [vars, name])

  return (
    <Select
      placeholder="Please select theme"
      value={name}
      onSelect={(value) => {
        const vars = value === 'light' ? lightVars : darkVars
        localStorage.setItem('app-theme', JSON.stringify(vars))
        localStorage.setItem('theme-name', value)
        dispatch(appTheme(value))
        setVars(vars)
      }}
    >
      <Select.Option value="light">
        <FormattedMessage id="theme.light" />
      </Select.Option>
      <Select.Option value="dark">
        <FormattedMessage id="theme.dark" />
      </Select.Option>
    </Select>
  )
}

export default ThemeSwitcher
