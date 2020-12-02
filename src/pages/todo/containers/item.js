import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { markTodoDone, deleteTodo } from "../../../store/actions/todo"
import TodoItem from "../components/item"

export default React.memo(props => {
  const dispatch = useDispatch()

  const deleteTodoById = id => {
    const data = {
      id
    };
    dispatch(deleteTodo(data))
  };

  const handleMarkTodoDone = useCallback(
    id => {
      const data = {
        id,
        done: true
      }
      dispatch(markTodoDone(data))
    },
    [dispatch]
  )

  return (
    <>
      <TodoItem
        markTodoDone={handleMarkTodoDone}
        deleteTodoById={deleteTodoById}
        {...props}
      />
    </>
  )
})
