import {
  Form,
  Input,
  Checkbox,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import SignLayout from '../../../layout/sign'
import { signIn } from '../../../store/actions/restful/auth';
import { SubmitButton } from '../../../layout/sign/index.styled';

const SignIn = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)
  const [form] = Form.useForm()

  const onFinish = values => {
    dispatch(signIn(values))
  }

  return (
    <SignLayout>
      <Form
        layout="vertical"
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          rememberMe: false
        }}
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
          name="rememberMe"
          valuePropName="checked"
        >
          <Checkbox>
            Remember Me
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit" loading={loading}>
            sign in
          </SubmitButton>
        </Form.Item>
      </Form>
    </SignLayout>
  );
};

export default SignIn
