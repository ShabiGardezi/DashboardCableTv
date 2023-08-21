import React from "react";
import { Container, Typography } from "@mui/material";
import VerticalNavbar from "./Sidebar";

function User(params) {
  return (
    <Container maxWidth="xs">
      <VerticalNavbar />
      <Typography variant="h4" align="center" gutterBottom>
        User data
      </Typography>
    </Container>
  );
}

export default User;
