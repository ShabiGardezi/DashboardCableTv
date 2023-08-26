import "../styles/SignUp.css";
import React, { useState } from "react";
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

      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    <div className="container-signup">
      <div className="grid">
        {/* Heading */}
        <div className="grid-item">
          <h4 className="heading">Welcome To Shop Satellite TV</h4>
        </div>
        {/* Description */}
        <div className="grid-item">
          <h4 className="heading">Sign Up</h4>
        </div>
        <div className="grid-item">
          <form onSubmit={handleSubmit}>
            <input
              className="text-input"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              className="text-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="text-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select
              className="select-input"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose Role
              </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </form>
          <button className="submit-button" type="submit">
            Add Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
