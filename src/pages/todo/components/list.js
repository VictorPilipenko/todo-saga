import React from "react";
import styled, { keyframes } from "styled-components";
import TodoItem from "../containers/item";

const TodoListBlock = styled.ul`
  position: relative;
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 3px solid #38d9a94f;
  border-top: 3px solid #38d9a9bf;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: ${rotate} 0.8s ease-in-out infinite;
`;
const Message = styled.div`
  margin: 30px auto;
  text-align: center;
  font-size: 21px;
  color: #49505778;
`;

const TodoList = ({ data, loading, err }) => {
  return (
    <TodoListBlock disabled={loading}>
      {data.map(({ id, ...otherProps }) => (
        <TodoItem key={id} id={id} {...otherProps} />
      ))}
      {loading && <Loader />}
      {
        err ? <Message>{err.message}</Message> :
          !data.length && !loading && <Message>Добавьте, пожалуйста, чем заняться!</Message>
      }
    </TodoListBlock>
  );
}

export default TodoList;
