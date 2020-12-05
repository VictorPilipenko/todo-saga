import React from 'react';
import { Tag, List, Button, Popconfirm, Switch, Alert, Row, Col } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import styled from "styled-components";

const TagBox = styled(Tag)`
  white-space: normal !important;
  word-break: break-all;
`;

const ColBox = styled(Col)`
  margin: 10px 0px 0px 0px;
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
          checked={todo.details.done}
        />,
        <Popconfirm
          disabled={todo.areFetching}
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
      <Row>
        <Col>
          <TagBox color={todo.details.done ? 'green' : 'red'}>
            {todo.details.text}
          </TagBox>
        </Col>
        {
          todo.fetchingError && 
          <ColBox>
            <Alert message={todo.fetchingError} type="error" showIcon closable />
          </ColBox>
        }
      </Row>
    </List.Item>
  )
}

export default Item
