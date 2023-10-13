import { FaFacebook } from "react-icons/fa";
import { Button, Input, Form } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { hideSidebar } from "@/redux-store/slices/sidebarSlice";
import { useEffect } from "react";
import { withoutAuth } from "@/configs/withoutAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Index = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const submit = () => {
    Cookies.set("ctn", 1234);
    router.push("/home");
  };

  useEffect(() => {
    dispatch(hideSidebar());
  }, []);

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-icon">
          <FaFacebook />
        </div>
        <h2 className="signup-title">Sign Up for Facebook</h2>
        <p className="signup-subtitle">It's quick and easy.</p>
        <Form onFinish={submit} className="signup-form">
          <Form.Item
            name="firstname"
            rules={[
              { required: true, message: "Please enter your first name." },
            ]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              { required: true, message: "Please enter your last name." },
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email." }]}
          >
            <Input placeholder="Mobile number or email address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter a password." }]}
          >
            <Input type="password" placeholder="New password" />
          </Form.Item>
          <p className="signup-subtitle">Date of birth</p>
          <div className="signup-dob">
            <Form.Item
              name="day"
              rules={[{ required: true, message: "Day is required." }]}
            >
              <Input placeholder="Day" />
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true, message: "Month is required." }]}
            >
              <Input placeholder="Month" />
            </Form.Item>
            <Form.Item
              name="year"
              rules={[{ required: true, message: "Year is required." }]}
            >
              <Input placeholder="Year" />
            </Form.Item>
          </div>
        </Form>
        <p className="signup-policy">
          By clicking Sign Up, you agree to our <a href="#">Terms</a>,{" "}
          <a href="#">Data Policy</a> and <a href="#">Cookies Policy</a>.
        </p>
        <Button type="primary" htmlType="submit" className="signup-button">
          Sign Up
        </Button>
        <div className="login-link">
          <Link href="/login">Already have an account? Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default withoutAuth(Index);
