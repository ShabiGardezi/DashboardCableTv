import React, { useState } from "react";
import {
  TextField,
  Button,
  Rating,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import "../styles/ProviderForm.css";
import HeaderCommon from "../pages/HeaderCommon";
import VerticalNavbar from "./Sidebar";
function ProviderForm() {
  const [providerName, setProviderName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(null);
  const [channel, setChannel] = useState("");
  const companies = [
    "FeaturesAT&T Internet + TV",
    "AT&T Internet",
    "Astound Broadband Powered by RCN Cable",
    "Astound Broadband Powered by Wave Cable",
    "Astound Broadband Powered by Wave TV + Internet",
    "Astound Broadband powered by Grande TV",
    "Buckeye Broadband Bundles",
    "Buckeye Broadband",
    "Cox",
    "DIRECTV + AT&T Internet",
    "DIRECTV STREAM",
    "DISH TV + Frontier Internet",
    "DISH TV + Windstream High-Speed Internet",
    "Directv",
    "DishTV",
    "Fidelity Communications",
    "Frontier",
    "Google Fiber",
    "Grande TV + Internet",
    "HughesNet",
    "Mediacom Cable TV & Internet",
    "Mediacom Cable",
    "Optimum Cable TV & Internet",
    "Optimum TV",
    "Sparklight TV",
    "Spectrum Cable",
    "Suddenlink TV + Internet",
    "Suddenlink TV",
    "Verizon",
    "Viasat Satellite Internet",
    "WOW! TV",
    "WOW!TV+Internet",
    "Xfinity TV from Comcast",
    "Armstrong",
    "Astound Broadband Powered by RCN Cable TV & Internet",
    "Astound Broadband Powered by RCN Internet",
    "Astound Broadband Powered by Wave Internet",
    "Atlantic Broadband",
    "Buckeye Broadband",
    "CenturyLink High-Speed Internet",
    "Cox Cable TV & Internet",
    "Cox",
    "Earthlink",
    "Fidelity Communications",
    "Frontier",
    "Google Fiber Internet",
    "Grande Internet",
    "Mediacom Cable Internet",
    "Optimum Internet",
    "Rise Broadband",
    "Sparklight TV & Internet",
    "Sparklight TV",
    "Spectrum Cable Internet",
    "Spectrum Cable TV & Internet",
    "Suddenlink Internet",
    "Verizon Bundles",
    "Verizon",
    "WOW!Internet",
    "Windstream High-Speed Internet",
    "Xfinity Cable TV & Internet from Comcast",
    "Xfinity Internet from Comcast",
    "Ziply Fiber",
  ];

  const handleRatingChange = (_event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <VerticalNavbar />
      <div className="Provider-container">
        <HeaderCommon title="Update Zip Code" />
        <Container maxWidth="sm">
          <h2 className="heading-1">Update Provider</h2>
          <form onSubmit={handleSubmit}>
            {/* <InputLabel>Provider Name</InputLabel>
            <Select
            value={providerName}
            onChange={(e) => setProviderName(e.target.value)}
            >
                <MenuItem value="" disabled>
                Choose Provider
                </MenuItem>
                {companies.map((company, index) => (
                    <MenuItem key={index} value={company}>
                    {company}
                    </MenuItem>
                    ))}
            </Select> */}
            <TextField
              select
              label="Provider Name"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              fullWidth
            >
              {companies.map((company, index) => (
                <MenuItem key={index} value={company}>
                  {company}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Zip Code"
              fullWidth
              variant="outlined"
              margin="normal"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <TextField
              label="Max Speed"
              fullWidth
              variant="outlined"
              margin="normal"
              value={maxSpeed}
              onChange={(e) => setMaxSpeed(e.target.value)}
            />
            <TextField
              label="Channels"
              fullWidth
              variant="outlined"
              margin="normal"
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            />
            <TextField
              label="Features"
              fullWidth
              variant="outlined"
              margin="normal"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            />
            <TextField
              label="Price"
              fullWidth
              variant="outlined"
              margin="normal"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Typography variant="h6" gutterBottom>
              Rating
            </Typography>
            <Box display="flex" alignItems="center">
              <Rating
                name="rating"
                value={rating}
                onChange={handleRatingChange}
                precision={0.1}
                size="large"
              />
              {rating !== null && (
                <Typography variant="h6" style={{ marginLeft: "10px" }}>
                  {rating}
                </Typography>
              )}
            </Box>
            <Button variant="contained" color="primary" type="submit">
              Add Now
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
}

export default ProviderForm;
