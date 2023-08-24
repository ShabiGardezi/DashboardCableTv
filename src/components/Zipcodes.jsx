import React from "react";
import VerticalNavbar from "./Sidebar";
import { Container, Typography } from "@mui/material";
import DataDisplay from "../pages/ZipCodeDataDisplay";
import ProviderForm from "../pages/ZipCodeDataDisplay";
function Zipcodes() {
  return (
    <>
      <VerticalNavbar />
      <ProviderForm />
    </>
  );
}
export default Zipcodes;
