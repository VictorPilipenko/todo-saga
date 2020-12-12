import React from 'react'
import { Row, Card, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { markTodoDone, deleteTodo, createTodo } from '../../../store/actions/todo'
import AddTodoForm from '../components/add'
import TodoList from '../components/list'
import { Default } from '../../../common/responsive'
import { PageHeaderStyled } from './index.styled'

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
      <Default>
        <Row>
          <PageHeaderStyled
            title={<FormattedMessage id="todo.hader.title" />}
            subTitle={<FormattedMessage id="todo.hader.subtitle" />}
          />
        </Row>
      </Default>
      <Card title={
        <FormattedMessage id="todo.input.title" />
      }>
        <AddTodoForm onFormSubmit={handleFormSubmit} loading={loading} pagination={pagination} />
      </Card>
      <Card title={
        <FormattedMessage id="list.title" />
      }>
        <TodoList
          err={err}
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
