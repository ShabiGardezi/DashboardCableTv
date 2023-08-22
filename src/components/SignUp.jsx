import "../styles/SignUp.css";
import React, { useState } from "react";
import {
  TextField,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "", // Set a default value for role
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
      const { username, email, password, role } = formData;
      const userData = { username, email, password, role };
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token
        },
        body: JSON.stringify(userData),
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
        {/* Heading */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome To Shop Satellite TV
          </Typography>
        </Grid>
        {/* Description */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              name="username"
              value={formData.username}
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
            <FormControl fullWidth margin="normal">
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Add Now
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
