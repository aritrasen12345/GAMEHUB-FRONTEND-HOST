import { Form, Input, Button, notification } from 'antd';
import LandingLayout from '../../../../layout/LandingLayout';

const SignUpCard = () => {
  const onFinish = () => {
    // console.log('Success:', values);
  };

  const onFinishFailed = () => {
    // console.log('Failed:', errorInfo);
  };

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };

  return (
    <LandingLayout>
      <Form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '2rem',
        }}
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        ></Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={openNotification}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </LandingLayout>
  );
};

export default SignUpCard;
