import React from "react";
import VerticalNavbar from "./Sidebar";
import { Container, Typography } from "@mui/material";

function Pages() {
  return (
    <Container maxWidth="xs">
      <VerticalNavbar />
      <Typography variant="h4" align="center" gutterBottom>
        All Pages here
      </Typography>
    </Container>
  );
}

export default Pages;
