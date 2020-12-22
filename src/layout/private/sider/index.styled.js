import { Layout, Menu } from 'antd'
import styled, { css } from "styled-components";

const { Sider } = Layout

export const SiderBlock = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  height: 200px;
  width: auto;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ src }) =>
    src && css`
      background-image: url(${src});
  `}
  ${({ collapsed }) =>
    collapsed && css`
      height: 69px;
  `}
  transition: all 0.2s;
`;

export const MenuBlock = styled(Menu)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const { ItemGroup } = MenuBlock

export const ItemGroupBlock = styled(ItemGroup)`
  height: 100%
`;


