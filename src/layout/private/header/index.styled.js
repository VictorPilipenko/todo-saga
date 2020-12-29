import styled, { css } from 'styled-components'
import { Layout, Menu } from 'antd'
import media from '../../../common/responsive/device'

const { Header } = Layout

const MyHeader = ({ collapsed, ...props }) => <Header {...props} />

export const HeadBlock = styled(MyHeader)`
  padding: 0px 16px 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row-reverse;
  h1 {
    margin: 0;
    font-size: 21px;
    color: #868e96;
  }
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  left: 0px;
  ${({ collapsed }) =>
    collapsed === true &&
    css`
      left: 80px;
    `}
  ${({ collapsed }) =>
    collapsed === false &&
    css`
      left: 200px;
    `}

  transition: all 0.2s;

  ${media.mobile`
    flex-flow: row;
  `}
`

const Logo = styled.div`
  height: 200px;
  width: auto;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
    `}
  transition: all 0.2s;
`

export const FilteredLogo = ({
  onItemHover,
  onOpenChange,
  onDeselect,
  ...props
}) => <Logo {...props} />

export const MenuBlock = styled(Menu)`
  display: flex;
  flex-direction: column;
  height: calc(100% - 200px);
  justify-content: space-between;
`

const { ItemGroup } = MenuBlock

export const ItemGroupBlock = styled(ItemGroup)`
  height: 100%;
`
