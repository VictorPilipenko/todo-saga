import React from "react";
import { useSelector } from "react-redux";
import { getUndoneNumber } from "../../../utils/getUndoneNumber";
import TodoHead from "../components/head";

const TodoHeadContainer = () => {
  const { data } = useSelector(state => state.todos);
  const today = new Date().toLocaleDateString();

  return (
    <TodoHead
      todoCount={data && getUndoneNumber(data)}
      today={today}
    />
  );
}
export default TodoHeadContainer;
