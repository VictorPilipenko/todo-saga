import { Row, Card, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { markTodoDone, deleteTodo, createTodo, getTodos } from '../../../store/actions/restful/todo'
import AddTodoForm from '../components/add'
import TodoList from '../components/list'
import { Default } from '../../../common/responsive'
import { PageHeaderStyled } from './index.styled'
import useDispatchOnFirstMount from '../../../hooks/useDispatchOnFirstMount'

const TodosContainer = () => {
  const dispatch = useDispatch()
  const { items, loading, error, pagination } = useSelector(state => state.todos)

  useDispatchOnFirstMount({
    handler: getTodos({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    })
  })

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
      <Space direction="vertical">
        <Card title={
          <FormattedMessage id="todo.input.title" />
        }>
          <AddTodoForm onFormSubmit={handleFormSubmit} loading={loading} pagination={pagination} />
        </Card>
        <Card title={
          <FormattedMessage id="list.title" />
        }>
          <TodoList
            error={error}
            loading={loading}
            todos={items}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleTodoToggle}
          />
        </Card>
      </Space>
    </>
  )
}

export default TodosContainer
