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
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";

function ProviderForm() {
  const [providerName, setProviderName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(null);
  const [channel, setChannel] = useState("");
  const [loading, setloading] = useState(false);

  const handleRatingChange = (_event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const res = await axios.post(`http://localhost:5000/api/add-provider`, {
        CompanyName: providerName,
        zipcodes: [zipCode],
        MaxDownloadSpeedsUpTo: maxSpeed,
        Features: features,
        Price: price,
        rating: rating,
        Channels: channel,
      });

      toast.success("Successfully added");
    } catch (error) {
      console.log(error);
      toast.error("Error adding provider");
    }
    setloading(false);
  };

  return (
    <div className="Provider-container">
      <Toaster />
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

          <LoadingButton
            loading={loading}
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Now
          </LoadingButton>
        </form>
      </Container>
    </div>
  );
}

export default ProviderForm;
