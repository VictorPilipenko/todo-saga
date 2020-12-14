import {
  Form,
  Input,
  Tooltip,
  Checkbox,
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import SignLayout from '../containers'
import { SubmitButton } from './index.styled'

const SignUp = () => {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log('Received values of form: ', values);
  }

  return (
    <SignLayout>
      <Form
        layout="vertical"
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="nickname"
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="rememberMe"
          valuePropName="checked"
        >
          <Checkbox>
            Remember Me
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            Register
          </SubmitButton>
        </Form.Item>
      </Form>
    </SignLayout>
  );
};

export default SignUp
