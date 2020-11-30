import React from "react"
import { useSelector } from "react-redux"
import TodoList from "../components/list"

function TodoListContainer() {
  const { items, loading, err } = useSelector(state => state.todos)

  return (
    <TodoList
      data={items}
      loading={loading}
      err={err}
    />
  )
}

export default TodoListContainer
