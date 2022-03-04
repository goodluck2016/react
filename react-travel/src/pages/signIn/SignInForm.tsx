import { Form, Input, Button, Checkbox } from 'antd';
import styles from './SignInForm.module.css';
import axios from 'axios';
import { signIn } from '../../redux/user/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const SignInForm = () => {
  const loading = useSelector(s => s.user.loading)
  const jwt = useSelector(s => s.user.token)
  const error = useSelector(s => s.user.error)

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if(jwt !== null) {
      history.push('/');
    }
  }, [jwt])

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    dispatch(signIn({
      email: values.username,
      password: values.password
    }))

    // try {
    //   await axios.post('http://123.56.149.216:8080/auth/register', {
    //     email: values.username,
    //     password: values.password,
    //     confirmPassword: values.confirm,
    //   });
    //   history.push('/signIn/');
    // } catch (error) {
    //   alert('注册失败！');
    // }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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

      <Form.Item {...tailLayout}
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};