import {
  Form,
  Input,
  Tooltip,
  Checkbox
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { SubmitButton } from '../../../layout/sign/index.styled';
import SignLayout from '../../../layout/sign'
import { signUp } from '../../../store/actions/restful/auth';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)
  const [form] = Form.useForm()

  const onFinish = values => {
    dispatch(signUp(values))
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
          <SubmitButton type="primary" htmlType="submit" loading={loading}>
            sign up
          </SubmitButton>
        </Form.Item>
      </Form>
    </SignLayout>
  );
};

export default SignUp
