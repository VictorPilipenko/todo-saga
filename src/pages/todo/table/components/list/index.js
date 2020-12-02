import React from 'react'
import { Alert, List } from 'antd'
import Item from '../item'

const TodoList = ({ err, loading, todos, onTodoRemoval, onTodoToggle }) => (
  err ?
    <Alert
      message="Error Message"
      description={err}
      type="error"
    />
    :
    <List
      loading={loading}
      locale={{
        emptyText: "There's nothing to do :("
      }}
      dataSource={todos}
      renderItem={todo => (
        <Item
          todo={todo}
          onTodoToggle={onTodoToggle}
          onTodoRemoval={onTodoRemoval}
        />
      )}
    />
)

export default TodoList
