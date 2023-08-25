import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
 import "../Styles/SignUp.css";
 

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("user");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/signup", {
        firstName,
        lastName,
        email,
        password,
        isAdmin,
      });

      if (data.user) {
        navigate("/Login");
        console.log("Register successful:", data.user);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Error signing up");
    }
  };

  return (
    <div className="signup_container">
    <div className="signup_form_container">
      <div className="left">
        <h1>Welcome Back</h1>
        <Link to="/login">
          <button type="button" className="white_btn">
            Sing in
          </button>
        </Link>
      </div>
      <div className="right">
        <form className="form_container" onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
             onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
            className="input"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
             value={lastName}
          onChange={(e) => setLastName(e.target.value)}
            required
            className="input"
          />
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
            className="input"/>
              <div className="user-type-radio">
              <label>
                <input
                  type="radio"
                  name="isAdmin"
                  value="user"
                  checked={isAdmin === "user"}
                  onChange={() => setIsAdmin("user")}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="isAdmin"
                  value="admin"
                  checked={isAdmin === "admin"}
                  onChange={() => setIsAdmin("admin")}
                />
                Admin
              </label>
            </div>
          {error && <div className="error_msg">{error}</div>}
          <button type="submit" className="green_btn">
            Sing Up
          </button>
        </form>
      </div>
    </div>
  </div>
);
};


export default SignUp;
