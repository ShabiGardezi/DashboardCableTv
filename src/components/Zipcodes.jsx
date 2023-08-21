import React from "react";
import VerticalNavbar from "./Sidebar";
import { Container, Typography } from "@mui/material";
function Zipcodes() {
  return (
    <Container maxWidth="xs">
      <VerticalNavbar />
      <Typography variant="h4" align="center" gutterBottom>
        All Zidcodes here, Add, Update or Delete
      </Typography>
    </Container>
  );
}
export default Zipcodes;
