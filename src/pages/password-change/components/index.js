import {
  Form,
  Input
} from 'antd'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignLayout from '../../../layout/sign'
import { SubmitButton } from '../../../layout/sign/index.styled';
import { passwordRecoveryStep2 } from '../../../store/actions/restful/auth';
import { setRecoveryPasswordConfirmToken } from '../../../utils/auth';

const params = new URL(document.location).searchParams

const SignUp = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)
  const [form] = Form.useForm()

  useEffect(() => {
    setRecoveryPasswordConfirmToken(params.get('token'))
  },[])

  const onFinish = values => {
    dispatch(passwordRecoveryStep2(values))
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
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit" loading={loading}>
            Change Password
          </SubmitButton>
        </Form.Item>
      </Form>
    </SignLayout>
  );
};

export default SignUp
