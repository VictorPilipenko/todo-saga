
import { Button, Menu } from 'antd'
import ThemeSwitcher from '../../theme'
import { Default, Mobile } from '../../../common/responsive'
import { useDrawer } from '../../../common/drawer'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  TeamOutlined,
  MoreOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { FilteredLogo, HeadBlock } from './index.styled'
import LocaleSwitcher from '../../locale'
import { FormattedMessage } from 'react-intl'
import { signOut } from '../../../store/actions/auth'

const Head = ({ collapsed }) => {
  const dispatch = useDispatch()
  const today = new Date().toLocaleDateString()
  const { name } = useSelector(state => state.theme)
  const { showDrawer, renderDrawer } = useDrawer()
  const location = useLocation()

  return (
    <HeadBlock collapsed={collapsed}>
      <ThemeSwitcher />
      <LocaleSwitcher />
      <Button onClick={() => dispatch(signOut())}>sign out</Button>
      <Default><h1>{today}</h1></Default>
      <Mobile>
        <Button type="primary" onClick={showDrawer}>
          <MoreOutlined onClick={showDrawer} />
        </Button>
        {renderDrawer({
          render: () => {
            return <>
              <Menu
                theme={name}
                mode="inline"
                selectedKeys={[location.pathname]}
              >
                <FilteredLogo src={`${process.env.PUBLIC_URL}/logo.png`} />
                <Menu.Item key="/todo" danger={true} title={'Home'}>
                  <HomeOutlined />
                  <span><FormattedMessage id="sider.menu.home" /></span>
                  <Link to="/todo"></Link>
                </Menu.Item>
                <Menu.Item key="/users" title={'some of users'}>
                  <TeamOutlined />
                  <span><FormattedMessage id="sider.menu.users" /></span>
                  <Link to="/users"></Link>
                </Menu.Item>
              </Menu>
            </>
          }
        })}
      </Mobile>
    </HeadBlock>
  )
}

export default Head
