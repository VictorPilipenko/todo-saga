import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 5px solid #38d9a94f;
  border-top: 5px solid #38d9a9bf;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: ${rotate} 0.8s ease-in-out infinite;
  ${props =>
    props.global &&
    css`
      position: absolute;
      height: 100px;
      width: 100px;
      top: 50%;
      left: 50%;
      margin-left: -50px;
      margin-top: -50px;
    `}
`;
