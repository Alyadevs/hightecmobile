import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css";
// import { Form, Input, Button } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
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
      const { data } = await axios.post("/api/users/Login", {
        email,
        password,
      });
      if (data.user) {
        window.localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/Cart");
        console.log("Login successful:", data.user);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      // console.error("Error logging in:", error);
      setErrorMessage("Invalid credentials");
    }
  };
  return (
    <div className="login_container" >
			<div className="login_form_container">
				<div className="right">
					<form className="form_container" onSubmit={handleLogin}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							 value={email}
                      onChange={(e) => setEmail(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							 value={password}
                          onChange={(e) => setPassword(e.target.value)}
							required
							className="input"
						/>
						{errorMessage && <div className="error_msg">{errorMessage}</div>}
						<button type="submit" className="green_btn">
							Sing In
						</button>
					</form>
				</div>
				<div className="left">
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className="white_btn">
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
