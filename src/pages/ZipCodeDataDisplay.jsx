// src/ProviderForm.js

import React, { useState } from "react";
import {
  TextField,
  Button,
  Rating,
  Typography,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import { AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";
import "../styles/ProviderForm.css";
function ProviderForm() {
  const [providerName, setProviderName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(null);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
      {/* <div className="provider-header">
        <h2>Zip Code</h2>
        <div className="btn-add">
          <button className="add-now">Add Now</button>
        </div>
      </div> */}
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
          value={providerName}
          onChange={(e) => setProviderName(e.target.value)}
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
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default ProviderForm;
