import {
  Form,
  Input,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import SignLayout from '../../../layout/sign'
import { passwordRecoveryStep1 } from '../../../store/actions/restful/auth';
import { SubmitButton } from '../../../layout/sign/index.styled';

const SignIn = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)
  const [form] = Form.useForm()

  const onFinish = values => {
    dispatch(passwordRecoveryStep1(values))
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
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit" loading={loading}>
            Enter Email For Letter With Confirmation
          </SubmitButton>
        </Form.Item>
      </Form>
    </SignLayout>
  );
};

export default SignIn
