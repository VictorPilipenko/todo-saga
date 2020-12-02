
import React from 'react'
import styled from "styled-components";
import { Layout } from 'antd'

const { Footer } = Layout

const FooterBlock = styled(Footer)`
  text-align: center;
`;

const FooterApp = () => {
  return (
    <FooterBlock>
      todo-saga ©2020 Created by thejustvic
    </FooterBlock>
  );
};

export default FooterApp
