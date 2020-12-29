import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Select } from 'antd'
import { getComponents, getMessages } from '../../utils/locale'
import { appLocale } from '../../store/local/locale/actions'

const LocaleSwitcher = () => {
  const dispatch = useDispatch()
  const { language } = useSelector((state) => state.locale)

  return (
    <Select
      value={language}
      onSelect={(language) => {
        dispatch(
          appLocale({
            language,
            messages: getMessages(language),
            components: getComponents(language),
          })
        )
      }}
    >
      <Select.Option value="en">
        <FormattedMessage id="locale.en" />
      </Select.Option>
      <Select.Option value="ru">
        <FormattedMessage id="locale.ru" />
      </Select.Option>
    </Select>
  )
}

export default LocaleSwitcher
