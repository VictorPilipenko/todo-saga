import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../store/actions/todo";
import TodoList from "../components/list";

function TodoListContainer() {
  const { data, loading, err } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <TodoList data={data} loading={loading} err={err}/>
    </>
  );
}

export default TodoListContainer;
