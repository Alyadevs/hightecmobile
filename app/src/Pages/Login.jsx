// src/LoginForm.js
import React from 'react';
import {useState,useEffect} from 'react' 
import { useNavigate ,Link} from "react-router-dom"
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../Styles/Login.css'
import axios from "axios";
const Login = () => {
 
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }, [errorMessage]);
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const { data } = await axios.post("api/users/login", {
          email,
          password,
        });
        if (data.user) {
          window.localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
          console.log("Login successful:", data.user);
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setErrorMessage("Invalid credentials");
      }
    };
 
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">   
        <img className="image"
            src={'./src/assets/user.png'}
            alt="Your Company"
            width="50"
            height={50}
           />
           <h2 className='login' > Login 
           </h2>
        </div>
     
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onSubmit={handleLogin}
    >
         
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon " />} placeholder="Email"   value={email}
                      onChange={(e) => setEmail(e.target.value)}/> 
      </Form.Item>
      <div className="text-sm">
                  <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                     Forgot password?
                    </Link>
                 </div>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"  value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form.Item>
      <p className="mt-10 text-sm text-center text-gray-500">
             Not a member?{' '}
             <a href="#" className="font-semibold leading-6 text-indigo-700 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
           </p>
    </Form>
    </div>
    </div>
    
  );
};

export default Login;
