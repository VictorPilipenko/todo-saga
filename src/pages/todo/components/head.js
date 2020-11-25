import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 21px;
    color: #868e96;
  }
`;

const TodoHead = ({ get, today, stopHandle, getTodos }) => {
  const history = useHistory()
  return (
    <TodoHeadBlock>
      <h1>{today}</h1>
      <button
        onClick={stopHandle}
      >stop</button>
      <button
        onClick={getTodos}
      >get</button>
            <button
        onClick={get}
      >another get</button>
      <button
        onClick={() => {
          stopHandle()
          history.push('/sdsad')
        }}
      >page</button>
    </TodoHeadBlock>
  );
}

export default React.memo(TodoHead)
