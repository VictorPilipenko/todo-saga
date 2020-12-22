import LocaleSwitcher from '../../locale'
import ThemeSwitcher from '../../theme'
import { HeadBlock } from './index.styled'

const Head = ({ collapsed }) => {
  const today = new Date().toLocaleDateString()

  return (
    <HeadBlock collapsed={collapsed}>
      <ThemeSwitcher />
      <LocaleSwitcher />
      <h1>{today}</h1>
    </HeadBlock>
  )
}

export default Head
