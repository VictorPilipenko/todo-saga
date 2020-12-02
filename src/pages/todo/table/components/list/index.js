import React from 'react'
import { List } from 'antd'
import Item from '../item'

const TodoList = ({ loading, todos, onTodoRemoval, onTodoToggle }) => (
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
