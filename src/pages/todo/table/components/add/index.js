import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { getTodos } from '../../../../../store/actions/todo';
import Pagination from '../../../../../common/pagination';

const AddForm = ({ onFormSubmit, loading, pagination }) => {
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

  useEffect(() => {
    dispatch(getTodos({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    }))
  }, []) // eslint-disable-line

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
    >
      <Row justify='space-between'>
        <Row gutter={15} >
          <Col>
            <Form.Item
              name={'name'}
              rules={[{
                required: true,
                message: 'This field is required'
              }]}
            >
              <Input placeholder="What needs to be done?" />
            </Form.Item>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit" block disabled={loading}>
              <PlusCircleFilled />
            Add todo
          </Button>
          </Col>
        </Row>

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
