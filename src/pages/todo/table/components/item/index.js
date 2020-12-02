import React from 'react';
import { Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import styled from "styled-components";

const TagBox = styled(Tag)`
  white-space: normal !important;
  word-break: break-all;
`;

const Item = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Switch
          loading={todo.areFetching}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          onChange={state => onTodoToggle({ todo, state })}
          defaultChecked={todo.details.done}
        />,
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
      <TagBox color={todo.details.done ? 'green' : 'red'}>
        {todo.details.text}
      </TagBox>
    </List.Item>
  )
}

export default Item
