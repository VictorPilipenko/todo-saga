
import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { appLocale } from '../../store/actions/local/locale'
import { FormattedMessage } from 'react-intl'
import { getComponents, getMessages } from '../../utils/locale'

const LocaleSwitcher = () => {
  const dispatch = useDispatch()
  const { language } = useSelector(state => state.locale)

  return (
    <Select
      value={language}
      onSelect={language => {
        dispatch(appLocale({
          language,
          messages: getMessages(language),
          components: getComponents(language),
        })) 
      }}
    >
      <Select.Option value="en"><FormattedMessage id="locale.en" /></Select.Option>
      <Select.Option value="ru"><FormattedMessage id="locale.ru" /></Select.Option>
    </Select>
  )
}

export default LocaleSwitcher
