import { Button, Input, Form, Checkbox } from "antd";
import { FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <FaFacebook />
        </div>
        <h2 className="login-title">Log in to Facebook</h2>
        <Form className="login-form">
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email." }]}
          >
            <Input placeholder="Email or phone number" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password." }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Log In
          </Button>
          <div className="login-options">
            <Checkbox>Keep me logged in</Checkbox>
            <a href="#" className="login-forgot-password">
              Forgot password?
            </a>
          </div>
          <hr className="login-hr" />
          <Button type="default" className="login-create-account">
            Create New Account
          </Button>
          <p className="login-create-page">
            <a href="#">Create a Page</a> for a celebrity, band, or business.
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Index;
