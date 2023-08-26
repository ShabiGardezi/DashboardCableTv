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
    "FeaturesAT&T Internet + TV.json",
    "AT&T Internet.json",
    "Astound Broadband Powered by RCN Cable.json",
    "Astound Broadband Powered by Wave Cable.json",
    "Astound Broadband Powered by Wave TV + Internet.json",
    "Astound Broadband powered by Grande TV.json",
    "Buckeye Broadband Bundles.json",
    "Buckeye Broadband.json",
    "Cox.json",
    "DIRECTV + AT&T Internet.json",
    "DIRECTV STREAM.json",
    "DISH TV + Frontier Internet.json",
    "DISH TV + Windstream High-Speed Internet.json",
    "Directv.json",
    "DishTV.json",
    "Fidelity Communications.json",
    "Frontier.json",
    "Google Fiber.json",
    "Grande TV + Internet.json",
    "HughesNet.json",
    "Mediacom Cable TV & Internet.json",
    "Mediacom Cable.json",
    "Optimum Cable TV & Internet.json",
    "Optimum TV.json",
    "Sparklight TV.json",
    "Spectrum Cable.json",
    "Suddenlink TV + Internet.json",
    "Suddenlink TV.json",
    "Verizon.json",
    "Viasat Satellite Internet.json",
    "WOW! TV.json",
    "WOW!TV+Internet.json",
    "Xfinity TV from Comcast.json",
    "Armstrong.json",
    "Astound Broadband Powered by RCN Cable TV & Internet.json",
    "Astound Broadband Powered by RCN Internet.json",
    "Astound Broadband Powered by Wave Internet.json",
    "Atlantic Broadband.json",
    "Buckeye Broadband.json",
    "CenturyLink High-Speed Internet.json",
    "Cox Cable TV & Internet.json",
    "Cox.json",
    "Earthlink.json",
    "Fidelity Communications.json",
    "Frontier.json",
    "Google Fiber Internet.json",
    "Grande Internet.json",
    "Mediacom Cable Internet.json",
    "Optimum Internet.json",
    "Rise Broadband.json",
    "Sparklight TV & Internet.json",
    "Sparklight TV.json",
    "Spectrum Cable Internet.json",
    "Spectrum Cable TV & Internet.json",
    "Suddenlink Internet.json",
    "Verizon Bundles.json",
    "Verizon.json",
    "WOW!Internet.json",
    "Windstream High-Speed Internet.json",
    "Xfinity Cable TV & Internet from Comcast.json",
    "Xfinity Internet from Comcast.json",
    "Ziply Fiber.json",
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
