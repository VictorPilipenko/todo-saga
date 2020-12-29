import { List, Button, Switch, Alert, Col } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { ColBox, RowBox, TagBox } from './index.styled'
import { useModal } from '../../../../common/modal/default'
import { FormattedMessage } from 'react-intl'

const Item = ({ todo, onTodoRemoval, onTodoToggle }) => {
  const { showModal, renderModal } = useModal()

  return (
    <>
      {renderModal({
        confirmLoading: todo.areFetching,
        onOk: () => onTodoRemoval(todo),
        render: () => (
          <h3>
            <FormattedMessage id="todo.modal.delete.title" />
          </h3>
        ),
      })}
      <List.Item
        actions={[
          <Switch
            loading={todo.areFetching}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={(state) => onTodoToggle({ todo, state })}
            checked={todo.details.done}
          />,
          <Button
            danger
            type="primary"
            disabled={todo.areFetching}
            onClick={showModal}
          >
            X
          </Button>,
        ]}
        key={todo.details.id}
      >
        <RowBox>
          <Col>
            <TagBox color={todo.details.done ? 'green' : 'red'}>
              {todo.details.text}
            </TagBox>
          </Col>
          {todo.fetchingError && (
            <ColBox>
              <Alert
                message={todo.fetchingError}
                type="error"
                showIcon
                closable
              />
            </ColBox>
          )}
        </RowBox>
      </List.Item>
    </>
  )
}

export default Item
