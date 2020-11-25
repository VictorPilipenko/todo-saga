import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnother, getTodos, stopHandle } from "../../../store/actions/todo";
import TodoHead from "../components/head";

const TodoHeadContainer = () => {
  const dispatch = useDispatch()
  const today = new Date().toLocaleDateString();
  const fstopHandle = () => {
    dispatch(stopHandle())
  }
  const fgetTodos = () => {
    dispatch(getTodos({
      page: 1,
      pageSize: 2
    }));
  }

  const fget = () => {
    dispatch(getAnother())
  }

  return (
    <TodoHead
      today={today}
      stopHandle={fstopHandle}
      getTodos={fgetTodos}
      get={fget}
    />
  );
}
export default TodoHeadContainer;
