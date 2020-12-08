import styled, { css } from "styled-components";
import { Layout } from 'antd'

const { Content } = Layout

export const ContentBlock = styled(Content)`
  margin: 100px 20px 16px;
  position: relative;
`;

const MyLayout = ({ collapsed, ...props }) => (
  <Layout {...props} />
)
export const LayoutBlock = styled(MyLayout)`
  min-height: 100vh;
`;

export const LayoutInner = styled(MyLayout)`
  transition: all 0.2s;
  margin-left: 0px;
  ${({ collapsed }) => collapsed === true && css`margin-left: 80px;`}
  ${({ collapsed }) => collapsed === false && css`margin-left: 200px;`}
`;
