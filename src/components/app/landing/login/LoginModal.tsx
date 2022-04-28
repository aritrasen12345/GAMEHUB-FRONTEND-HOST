import { Form, Input, Button, Modal, notification } from 'antd';
import classes from './LoginModal.module.css';
import Credential from '../../../../types/user/credentials';
import { useState, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = (props: Props) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6,
    );
  }, [enteredEmail, enteredPassword]);

  const onFinish = (values: Credential) => {
    notification.success({
      message: 'Login Successful',
    });
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div>
      <Modal
        title={<div style={{ textAlign: 'center' }}>Sign in</div>}
        onCancel={props.onClose}
        visible={props.isOpen}
        footer={null}
      >
        <Form
          className={classes['login-modal__wrapper']}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              value={enteredEmail}
              autoFocus={true}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
            />
          </Form.Item>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            disabled={!formIsValid}
          >
            Sign in
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginModal;
