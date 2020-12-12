
import React from 'react'
import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { appLocale } from '../../store/actions/locale'

import RU_Components from 'antd/es/locale/ru_RU'
import US_Components from 'antd/es/locale/en_US'

import RU from '../../locale/ru'
import EN from '../../locale/en'
import { FormattedMessage } from 'react-intl'


const LocaleSwitcher = () => {
  const dispatch = useDispatch()
  const { locale } = useSelector(state => state.locale)

  return (
    <Select
      placeholder="Please select locale"
      value={locale}
      onSelect={value => {
        value === 'en' && dispatch(appLocale({
          locale: 'en',
          messages: EN,
          components: US_Components,
        }))
        value === 'ru' && dispatch(appLocale({
          locale: 'ru',
          messages: RU,
          components: RU_Components,
        }))
      }}
    >
      <Select.Option value="en"><FormattedMessage id="locale.en" /></Select.Option>
      <Select.Option value="ru"><FormattedMessage id="locale.ru" /></Select.Option>
    </Select>
  )
}

export default LocaleSwitcher
