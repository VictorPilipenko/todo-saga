
import React from 'react';
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignLayout = ({ children }) => {
  return (
    <Background>
      {children}
    </Background>
  );
};

export default SignLayout;
