
import React from 'react';
import styled from "styled-components";
import { Menu, Layout } from 'antd';
import { UserOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcffe6;
`;

const ChildrenBox = styled.span`
  padding: 60px;
  background-color: white;
`;

const SignLayout = ({ children }) => {
  return (
    <Background>
      {/* <ChildrenBox></ChildrenBox> */}
      {children}
    </Background>
  );
};

export default SignLayout;
