import "../styles/SignUp.css";
import React, { useState } from "react";
import { Button, TextField, Container, Typography, Grid } from "@mui/material";
import Logo from "../assests/header-Logo.png";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <img src={Logo} alt="Logo" style={{ maxWidth: "100%" }} />
        </Grid>
        {/* Heading */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome To Shop Satellite TV{" "}
          </Typography>
        </Grid>
        {/* Description */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body1" align="center">
            Please fill all fields to sign up.
          </Typography>{" "}
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Last Name"
              fullWidth
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Sign Up
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
