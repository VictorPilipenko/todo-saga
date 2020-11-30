import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodos } from "../../../store/actions/todo"
import TodoHead from "../components/head"

const TodoHeadContainer = () => {
  const dispatch = useDispatch()
  const { loading, pagination } = useSelector(state => state.todos)
  const [pageSize, setPageSize] = useState(pagination.pageSize)

  const pageChangeHandler = ({ selected }) => {
    dispatch(getTodos({
      page: parseInt(selected) + 1,
      pageSize
    }))
  }

  useEffect(() => {
    if (!loading) {
      dispatch(getTodos({
        page: pagination.currentPage,
        pageSize
      }))
    }
  }, [dispatch, pageSize]) // eslint-disable-line

  return (
    <TodoHead
      loading={loading}
      pagination={pagination}
      setPageSize={setPageSize}
      pageChangeHandler={pageChangeHandler}
    />
  );
}
export default TodoHeadContainer
