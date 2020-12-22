
import { Button } from 'antd'
import ThemeSwitcher from '../../theme'
import { Default, Mobile } from '../../../common/responsive'
import { useDrawer } from '../../../common/drawer'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  DashboardOutlined,
  UserOutlined,
  MoreOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { FilteredLogo, HeadBlock, MenuBlock, ItemGroupBlock } from './index.styled'
import LocaleSwitcher from '../../locale'
import { FormattedMessage } from 'react-intl'
import { useModal } from '../../../common/modal/default'
import { signOut } from '../../../store/actions/restful/auth'

const Head = ({ collapsed }) => {
  const today = new Date().toLocaleDateString()
  const { name } = useSelector(state => state.theme)
  const { showDrawer, hideDrawer, renderDrawer } = useDrawer()
  const { showModal, renderModal } = useModal()
  const location = useLocation()
  const dispatch = useDispatch()
  return (
    <HeadBlock collapsed={collapsed}>
      <ThemeSwitcher />
      <LocaleSwitcher />
      <Default><h1>{today}</h1></Default>
      <Mobile>
        <Button type="primary" onClick={showDrawer}>
          <MoreOutlined/>
        </Button>
        {renderDrawer({
          render: () => {
            return <>
              {
                renderModal({
                  onOk: () => dispatch(signOut()),
                  render: () => (
                    <h3><FormattedMessage id="sider.modal.sign.out.title" /></h3>
                  )
                })
              }
              <FilteredLogo src={`${process.env.PUBLIC_URL}/logo.png`} />
              <MenuBlock
                theme={name}
                mode="inline"
                selectedKeys={[location.pathname]}
                onClick={() => hideDrawer()}
              >
                <ItemGroupBlock>
                  <MenuBlock.Item key="/todo" danger={true} title={'Home'}>
                    <HomeOutlined />
                    <span><FormattedMessage id="sider.menu.home" /></span>
                    <Link to="/todo"></Link>
                  </MenuBlock.Item>
                  <MenuBlock.Item key="/dashboard" title={'dashboard'}>
                    <DashboardOutlined />
                    <span>dashboard</span>
                    <Link to="/dashboard"></Link>
                  </MenuBlock.Item>
                </ItemGroupBlock>
                <MenuBlock.SubMenu key="/profile" icon={<UserOutlined />} title={'profile'}>
                  <MenuBlock.Item key="out" title={'sign out'} onClick={showModal}>
                    <span>out</span>
                  </MenuBlock.Item>
                  <MenuBlock.Item key="/profile" title={'info'}>
                    <span><FormattedMessage id="sider.menu.users" /></span>
                    <Link to="/profile"></Link>
                  </MenuBlock.Item>
                </MenuBlock.SubMenu>
              </MenuBlock>
            </>
          }
        })}
      </Mobile>
    </HeadBlock>
  )
}

export default Head
