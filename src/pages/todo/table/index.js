import React from 'react'
import { Row, Card, PageHeader } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { markTodoDone, deleteTodo, createTodo } from '../../../store/actions/todo'
import AddTodoForm from './components/add'
import TodoList from './components/list'

const TodosContainer = () => {
  const { items, loading, err, pagination } = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const handleFormSubmit = (todo) => {
    const data = {
      text: todo.name,
      done: false
    }
    dispatch(createTodo(data))
  }

  const handleRemoveTodo = (todo) => {
    const data = {
      id: todo.details.id
    }
    dispatch(deleteTodo(data))
  }

  const handleTodoToggle = ({ todo, state }) => {
    const data = {
      id: todo.details.id,
      done: state
    }
    dispatch(markTodoDone(data))
  }

  return (
    <>
      <Row>
        <PageHeader
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Row>
      <Card title="Create a new todo">
        <AddTodoForm onFormSubmit={handleFormSubmit} loading={loading} pagination={pagination} />
      </Card>
      <Card title="Todo List">
        <TodoList
          loading={loading}
          todos={items}
          onTodoRemoval={handleRemoveTodo}
          onTodoToggle={handleTodoToggle}
        />
      </Card>
    </>
  )
}

export default TodosContainer
