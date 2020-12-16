import { useDispatch } from 'react-redux';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { getTodos } from '../../../../store/actions/restful/todo';
import Pagination from '../../../../common/pagination';
import { Default } from '../../../../common/responsive';
import { RowBox } from './index.styled';
import { FormattedMessage, useIntl } from 'react-intl';

const AddForm = ({ onFormSubmit, loading, pagination }) => {
  const intl = useIntl()
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const onFinish = () => {
    onFormSubmit({
      name: form.getFieldValue('name')
    })
    form.resetFields()
  }

  const onChange = (page, pageSize) => {
    dispatch(getTodos({
      page,
      pageSize
    }))
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
    >
      <Row justify='space-between'>
        <RowBox gutter={15} wrap={false} >
          <Col>
            <Form.Item
              name={'name'}
              rules={[{
                required: true,
                message: 'This field is required'
              }]}
            >
              <Input placeholder={intl.formatMessage({ id: 'todo.input.placeholder' })} />
            </Form.Item>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit" block disabled={loading}>
              <PlusCircleFilled />
              <Default> <FormattedMessage id="todo.input.button" /></Default>
            </Button>
          </Col>
        </RowBox>

        <Col>
          <Pagination
            current={pagination.currentPage}
            total={pagination.totalCount}
            pageSize={pagination.pageSize}
            showSizeChanger
            onChange={onChange}
            pageSizeOptions={['1', '2', '5', '10']}
          />
        </Col>
      </Row>

    </Form>
  )
}

export default AddForm
