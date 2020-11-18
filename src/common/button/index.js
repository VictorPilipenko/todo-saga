import styled, { css } from "styled-components";

export const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 0px 1px rgba(0, 0, 0, 0.5);
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

export const Button = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 0px 1px rgba(0, 0, 0, 0.5);
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  padding: 15px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
  bottom: 20%;
`;

