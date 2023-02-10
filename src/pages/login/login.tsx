import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 8 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    md: { span: 10 },
    lg: { span: 10 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    md: {
      span: 6,
      offset: 8,
    },
    lg: {
      span: 4,
      offset: 8,
    },
  },
};

const Login: React.FC = () => {
  return (
    <div className="login-form">

      <Row>
        <Col span={24}>
          <Form {...formItemLayout} name="normal_login" className="login-form">
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              New User? <a href="/register">Register Now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
