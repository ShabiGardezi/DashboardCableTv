import React from "react";
import { Container, Typography } from "@mui/material";
import VerticalNavbar from "./Sidebar";
import SignUp from "./SignUp";

function User() {
  return (
    <Container maxWidth="xs">
      <VerticalNavbar />
      <Typography variant="h4" align="center" gutterBottom>
        User data
      </Typography>
      <SignUp />
    </Container>
  );
}

export default User;
