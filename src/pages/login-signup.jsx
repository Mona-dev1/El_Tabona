
import React, { useState } from "react";
import "../assets/css/login-signup.css";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/images/log.png";

export default function LoginSignup() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };


  const validate = () => {
    const err = {};
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Please enter a valid email";
    }
    if (!form.password || form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }
    if (mode === "signup" && !form.name.trim()) {
      err.name = "Please enter your name";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const dummyUser = {
      email: "batolmohamed1772005@gmail.com",
      password: "batol17",
    };

    if (form.email === dummyUser.email && form.password === dummyUser.password) {
       sessionStorage.setItem("userLoggedIn", "true"); 
      sessionStorage.setItem("userEmail", form.email);
      sessionStorage.setItem("userName", "Batol Mohamed");
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="ls-page">
      <div className="ls-wrapper">
        <div className="ls-img-box">
          <img src={loginImg} alt="Login Visual" />
        </div>

        <div className="ls-card">
          <div className="ls-switch">
            <button
              className={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={mode === "signup" ? "active" : ""}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
          </div>

          <h2 className="ls-title">{mode === "login" ? "Welcome Back" : "Join Us"}</h2>

          <form className="ls-form" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
            )}

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>

            <button className="ls-submit" type="submit">
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="ls-footer">
            Or  
            <button className="link-like" type="button">
              Continue with Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
