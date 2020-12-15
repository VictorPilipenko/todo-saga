import styled, { keyframes, css } from "styled-components";

const sizeInPX = 200

const borderSizeInPX = 4

const rotate_child_1 = keyframes`
  0%,
  8.33%,
  16.66%,
  100% {
    transform: translate(0%, 0%);
  }

  24.99%,
  33.32%,
  41.65% {
    transform: translate(100%, 0%);
  }

  49.98%,
  58.31%,
  66.64% {
    transform: translate(100%, 100%);
  }

  74.97%,
  83.30%,
  91.63% {
    transform: translate(0%, 100%);
  }
`;

const rotate_child_2 = keyframes`
  0%,
  8.33%,
  91.63%,
  100% {
    transform: translate(0%, 0%);
  }

  16.66%,
  24.99%,
  33.32% {
    transform: translate(0%, 100%);
  }

  41.65%,
  49.98%,
  58.31% {
    transform: translate(-100%, 100%);
  }

  66.64%,
  74.97%,
  83.30% {
    transform: translate(-100%, 0%);
  }
`;

const rotate_child_3 = keyframes`
  0%,
  83.30%,
  91.63%,
  100% {
    transform: translate(0, 0);
  }

  8.33%,
  16.66%,
  24.99% {
    transform: translate(-100%, 0);
  }

  33.32%,
  41.65%,
  49.98% {
    transform: translate(-100%, -100%);
  }

  58.31%,
  66.64%,
  74.97% {
    transform: translate(0, -100%);
  }
`;

export const Default = styled.div`
  position: relative;
  width: ${props => props.size ? props.size : sizeInPX}px;
  height: ${props => props.size ? props.size : sizeInPX}px;
  transform: rotate(45deg);

  .spinner-item {
    position: absolute;
    width: calc(${props => props.size ? props.size : sizeInPX}px / 2.5);
    height: calc(${props => props.size ? props.size : sizeInPX}px / 2.5);
  }

  .spinner-item:nth-child(1) {
    border: ${props => props.border ? props.border : borderSizeInPX}px solid #bbbb88;
    top: 0;
    left: 0;
    animation: ${rotate_child_1} 5000ms linear infinite;
  }

  .spinner-item:nth-child(2) {
    border: ${props => props.border ? props.border : borderSizeInPX}px solid #eedd99;
    top: 0;
    left: calc(${props => props.size ? props.size : sizeInPX}px / 2.5);
    animation: ${rotate_child_2} 5000ms linear infinite;
  }

  .spinner-item:nth-child(3) {
    border: ${props => props.border ? props.border : borderSizeInPX}px solid #eeaa88;
    top: calc(${props => props.size ? props.size : sizeInPX}px / 2.5);
    left: calc(${props => props.size ? props.size : sizeInPX}px / 2.5);
    animation: ${rotate_child_3} 5000ms linear infinite;
  }

  ${props => props.global &&
    css`
      position: absolute;
      height: 300px;
      width: 300px;
      top: 50%;
      left: 50%;
      margin-left: -150px;
      margin-top: -150px;
    `}
`;

export const MobileLoader = ({ ...props }) => <Default {...props}>
  <div className="spinner-item" />
  <div className="spinner-item" />
  <div className="spinner-item" />
</Default>

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const DefaultLoader = styled.div`
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
