import React from "react";
import styled, { css } from "styled-components";
import { Loader } from "../../../common/loader";
import ListSkeleton from "../../../common/skeleton/list";
import TodoItem from "../containers/item";

const TodoListBlock = styled.ul`
  position: relative;
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
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
      {
        data.map(({ ...otherProps }, key) => (
          <TodoItem key={key} id={key} {...otherProps} />
        ))
      }
      {
        loading && data.length === 0 ? <ListSkeleton /> :
          loading && data.length > 0 && <Loader global/>
      }
      {
        err ? <Message>{err.message}</Message> :
          !data.length && !loading && <Message>Добавьте, пожалуйста, чем заняться!</Message>
      }
    </TodoListBlock>
  );
}

export default TodoList;
