import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../../common/pagination";
import { axiosCache } from "../../../config/axios";
import { usePageVisibility } from "../../../hooks/usePageVisibility";
import { useWindowFocus } from "../../../hooks/useWindowFocus";
import { getTodos } from "../../../store/actions/todo";
import TodoList from "../components/list";

function TodoListContainer() {
  const isWindowFocused = useWindowFocus()
  const isVisible = usePageVisibility()
  const dispatch = useDispatch()
  const { items, pagination, loading, err } = useSelector(state => state.todos)
  const [pageSize, setPageSize] = useState(pagination.pageSize)
  const [currentPage, setCurrentPage] = useState(pagination.currentPage)

  const pageChangeHandler = ({ selected }) => {
    setCurrentPage(parseInt(selected) + 1)
    dispatch(getTodos({
      page: parseInt(selected) + 1,
      pageSize
    }))
  }

  useEffect(() => {
    if (isVisible && isWindowFocused) {
      axiosCache.reset()
      dispatch(getTodos({
        page: currentPage,
        pageSize
      }))
    }
  }, [isVisible, isWindowFocused]) // eslint-disable-line

  useEffect(() => {
    if (!loading) {
      dispatch(getTodos({
        page: currentPage,
        pageSize
      }))
    }
  }, [dispatch, pageSize]) // eslint-disable-line

  return (
    <>
      <Pagination
        currentPage={pagination.currentPage}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
        valueHandler={setPageSize}
        pageChangeHandler={pageChangeHandler}
        options={[1, 2, 3]}
      />
      <TodoList
        data={items}
        loading={loading}
        err={err}
      />
    </>
  );
}

export default TodoListContainer;
