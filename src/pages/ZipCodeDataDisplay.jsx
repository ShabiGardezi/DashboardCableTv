import React, { useState } from "react";
import {
  TextField,
  Button,
  Rating,
  Typography,
  Box,
  Container,
} from "@mui/material";
import "../styles/ProviderForm.css";
import HeaderCommon from "./HeaderCommon";
function ProviderForm() {
  const [providerName, setProviderName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(null);
  const [channel, setChannel] = useState("");

  const handleRatingChange = (_event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Provider-container">
      <HeaderCommon title="Zip Code" />
      <Container maxWidth="sm">
        <h2 className="heading-1">Add Provider</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Provider Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={providerName}
            onChange={(e) => setProviderName(e.target.value)}
          />

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
  );
}

export default ProviderForm;
