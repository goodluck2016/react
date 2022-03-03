import React from 'react';
import styles from './RegisterForm.module.css';
import { Form, Input, Button, Checkbox } from 'antd';

export const RegisterForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['register-form']}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
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
        label="Confirm Password"
        name="Confirm"
        hasFeedback
        rules={[
          { required: true, message: 'Please input your Confirm password!' },
          (({getFieldValue}) => ({
            validator(_, value) {
              if(!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject('密码确认不一致')
            }
          }))
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// export const RegisterForm: React.FC = (props) => {
//   console.log(props)
//   return (
//     <h1>RegisterForm</h1> 
//   );
// }