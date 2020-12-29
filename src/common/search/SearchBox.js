import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'

const { Search } = Input

const SearchBox = ({ placeholder, action, loading }) => {
  const dispatch = useDispatch()
  const { value, changeValue } = useInput('')
  const onSearch = useCallback(() => {
    dispatch(action(value))
  }, [value, action, dispatch])
  return (
    <div>
      <Search
        placeholder={placeholder}
        value={value}
        onChange={changeValue}
        onSearch={onSearch}
        style={{ height: '30px' }}
        loading={loading}
      />
    </div>
  )
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  action: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default SearchBox
