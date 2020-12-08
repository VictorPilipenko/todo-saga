import { Layout } from 'antd'
import styled, { css } from "styled-components";

const { Sider } = Layout

export const SiderBlock = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
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
      height: 80px;
  `}
  transition: all 0.2s;
`;
