import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const Item = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.details.done ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            loading={todo.areFetching}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={state => onTodoToggle({ todo, state })}
            defaultChecked={todo.details.done}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo)
          }}
        >
          <Button type="primary" danger disabled={todo.areFetching}>
            X
          </Button>
        </Popconfirm>,
      ]}
      key={todo.details.id}
    >
      <Tag color={todo.details.done ? 'green' : 'red'}>
        {todo.details.text}
      </Tag>
    </List.Item>
  )
}

export default Item
