import React from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, NotificationOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import useInput from '../../../hooks/useInput';
import SignLayout from '../containers';
import { Warning } from './index.styled';

const SignUp = () => {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.user);

  const [email, setEmail, changeEmail] = useInput('');
  const [nickname, setNickname, changeNickname] = useInput('');
  const [password, setPassword, changePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useInput(false);
  const [passwordWarning, setPasswordWaring] = useInput(false);
  const [term, setTerm] = useInput(false);
  const [termError, setTermError] = useInput(null);
  const termChange = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  });

  const changePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(false);
      if (password !== e.target.value) {
        setPasswordWaring(true);
      } else {
        setPasswordWaring(false);
      }
    },
    [password, passwordCheck]
  );

  const onFinish = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return null;
    }
    if (!term) {
      setTermError(true);
      return null;
    }
    console.log({ email, nickname, password })
  }, [email, nickname, password, passwordCheck, term, termError])


  return (
    <SignLayout>
      <Card style={{ width: '400px' }} title='Подписаться'>
        <Form onFinish={onFinish}>
          <Form.Item>
            <Input
              size='large'
              name='user-email'
              type='email'
              placeholder='email'
              required={true}
              value={email}
              onChange={changeEmail}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              size='large'
              name='user-nickname'
              placeholder='nick'
              required={true}
              value={nickname}
              onChange={changeNickname}
              prefix={<NotificationOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              size='large'
              name='user-password'
              type='password'
              placeholder='password'
              required={true}
              value={password}
              onChange={changePassword}
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            validateStatus={passwordError ? 'error' : 'success'}
            help={passwordError ? 'Пожалуйста, проверьте свой пароль' : null}
          >
            <Input
              style={{ color: passwordWarning ? 'hotpink' : 'blue' }} // 맞으면 파란색으로 변경
              size='large'
              name='user-password-check'
              type='password'
              placeholder='password check'
              required={true}
              value={passwordCheck}
              onChange={changePasswordCheck}
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Checkbox checked={term} onChange={termChange}>
              terms
            </Checkbox>
            <br />
            {termError && <Warning>terms warning!</Warning>}
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button 
            type='primary' 
            htmlType='submit' 
            // loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </SignLayout>
  );
};

export default SignUp;
