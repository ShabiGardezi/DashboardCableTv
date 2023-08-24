import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assests/header-Logo.png";
import RightImg from "../assests/login.png";
import "../styles/Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        navigate("/dashboard");

        // Check if "Remember Me" is checked, and save email and password to local storage
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("rememberedPassword", password);
        } else {
          // If "Remember Me" is not checked, clear any saved data in local storage
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberedPassword");
        }
        console.log(response.status);
      } else if (response.status === 401) {
        console.log("Wrong email or password");
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  React.useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can handle login logic here, e.g., sending data to the server.
  //   // console.log(formData);
  // };

  return (
    <div className="container">
      <div className="main">
        <div className="leftSide">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <h2 className="heading">Welcome to Shop Satellite Tv</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ultrices varius odio, sit amet euismod lorem ultricies eget. Nullam
            ac aliquam massa. Fusce ullamcorper nisl ultrices tortor consectetur
            tincidunt.
          </p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="rightSide">
          <img className="right-img" src={RightImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
