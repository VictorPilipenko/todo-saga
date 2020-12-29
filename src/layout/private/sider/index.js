import { Link, useLocation } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import {
  HomeOutlined,
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { signOut } from '../../../store/restful/auth/actions'
import { useModal } from '../../../common/modal/default'
import { Logo, MenuBlock, SiderBlock, ItemGroupBlock } from './index.styled'

const App = ({ collapsed, onCollapse }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { showModal, renderModal } = useModal()
  return (
    <>
      {renderModal({
        onOk: () => dispatch(signOut()),
        render: () => (
          <h3>
            <FormattedMessage id="sider.modal.sign.out.title" />
          </h3>
        ),
      })}
      <SiderBlock collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Logo
          src={`${process.env.PUBLIC_URL}/logo.png`}
          collapsed={collapsed}
        />
        <MenuBlock
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
        >
          <ItemGroupBlock>
            <MenuBlock.Item key="/todo" danger={true} title={'Home'}>
              <HomeOutlined />
              <span>
                <FormattedMessage id="sider.menu.home" />
              </span>
              <Link to="/todo"></Link>
            </MenuBlock.Item>
            <MenuBlock.Item key="/dashboard" title={'dashboard'}>
              <DashboardOutlined />
              <span>dashboard</span>
              <Link to="/dashboard"></Link>
            </MenuBlock.Item>
          </ItemGroupBlock>
          <MenuBlock.SubMenu
            key="/profile"
            icon={<UserOutlined />}
            title={'profile'}
          >
            <MenuBlock.Item key="out" title={'sign out'} onClick={showModal}>
              <span>out</span>
            </MenuBlock.Item>
            <MenuBlock.Item key="/profile" title={'info'}>
              <span>
                <FormattedMessage id="sider.menu.users" />
              </span>
              <Link to="/profile"></Link>
            </MenuBlock.Item>
          </MenuBlock.SubMenu>
        </MenuBlock>
      </SiderBlock>
    </>
  )
}

export default App
