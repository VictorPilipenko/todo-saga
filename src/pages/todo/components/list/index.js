import { Alert, List, Skeleton } from 'antd'
import Item from '../item'

const TodoList = ({ error, loading, todos, onTodoRemoval, onTodoToggle }) => {
  return <>
    {error ?
      <Alert
        message="Ошибка"
        description={error}
        type="error"
      />
      :
      <Skeleton loading={loading && todos.length === 0} active>
        <List
          loading={loading}
          locale={{
            emptyText: "Делать нечего :("
          }}
          dataSource={todos}
          renderItem={todo =>
            <Item
              key={todo.details.id}
              todo={todo}
              onTodoToggle={onTodoToggle}
              onTodoRemoval={onTodoRemoval}
            />
          }
        />
      </Skeleton>}
  </>
}

export default TodoList
