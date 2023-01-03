import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Row,
  Col,
} from "antd";
import TitleHeading from "../CommonHeading/CommonHeading";

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

const Register: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <div className="register-form">
      <TitleHeading title={'Welcome! Start searching your partner with this Signup'}/>

      <Row>
        <Col span={24}>
          <Form
            {...formItemLayout}
            autoComplete="off"
            form={form}
            name="register"
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                { type: "email", message: "E-mail is not valid" },
                { required: true, message: "Type your E-mail!" },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your E-mail" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Type your password" },
                { min: 8, message: "Min length 8" },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Type your password" />
            </Form.Item>

            <Form.Item
              label="Password Confirmation"
              name="password_confirmation"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
              dependencies={["password"]}
              hasFeedback
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="first_name"
              rules={[{ required: true, message: "Type your first name" }]}
            >
              <Input placeholder="Type your fisrt name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[{ required: true, message: "Type your last name" }]}
            >
              <Input placeholder="Type your last name" />
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: "Select your date of birth" }]}
            >
              <DatePicker
                picker="date"
                placeholder="Choose date of birth"
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" block>
                Signup
              </Button>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              Already a User? <a href="/login">Login</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
