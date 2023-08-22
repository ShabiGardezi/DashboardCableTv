import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assests/header-Logo.png";
import RightImg from "../assests/login.png";
import "../styles/Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
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
      } else if (response.status === 401) {
        console.log("Wrong email or password");
      } else {
        console.log("An error occurred");
      }
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
    const handleSignup = () => {
      // Navigate to the signup component when the "Signup" button is clicked.
      navigate("/signup");
    };
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle login logic here, e.g., sending data to the server.
    // console.log(formData);
  };

  return (
    <Container maxWidth="xs">
      <div className="leftside">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {/* Logo */}
          <div className="logo">
            <Grid item xs={12}>
              <img src={Logo} alt="Logo" style={{ maxWidth: "100%" }} />
            </Grid>
          </div>

          {/* Heading */}
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Welcome To Shop Satellite TV{" "}
            </Typography>
          </Grid>
          {/* Description */}
          <Grid item xs={12}>
            <Typography variant="p" align="center" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ultrices varius odio, sit amet euismod lorem ultricies eget.
              Nullam ac aliquam massa. Fusce ullamcorper nisl ultrices tortor
              consectetur tincidunt.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                fullWidth
                margin="normal"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Remember Me Checkbox */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    name="rememberMe"
                  />
                }
                label="Remember Me"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                onClick={handleLogin}
              >
                Login
              </Button>
              {/* <Typography
                variant="body1"
                align="center"
                style={{ marginTop: "8px" }}
              >
                Don't have an account?
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sign up
                </Link>
              </Typography> */}
            </form>
          </Grid>
        </Grid>
      </div>
      <div className="rightside">
        <img src={RightImg} alt="Login-Image" />
      </div>
    </Container>
  );
}

export default Login;
