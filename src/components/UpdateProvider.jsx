import React, { useState, useEffect } from "react";
import {
  TextField,
  Rating,
  Typography,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import "../styles/ProviderForm.css";
import HeaderCommon from "../pages/HeaderCommon";
import VerticalNavbar from "./Sidebar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
function ProviderForm() {
  const [providerName, setProviderName] = useState("");
  const [zipcodes, setzipcodes] = useState("");
  const [MaxDownloadSpeedsUpTo, setMaxDownloadSpeedsUpTo] = useState("");
  const [Features, setFeatures] = useState([]);
  const [Price, setPrice] = useState("");
  const [rating, setRating] = useState(null);
  const [Channels, setChannels] = useState("");
  const [loading, setloading] = useState(false);
  const [companyNames, setCompanyNames] = useState([]);
  
  useEffect(() => {
    // Fetch company names when the component mounts
    async function fetchCompanyNames() {
      try {
        const response = await axios.get(`http://localhost:5000/api/companyNames`);
        setCompanyNames(response.data);
      } catch (error) {
        console.error("Error fetching company names:", error);
      }
    }

    fetchCompanyNames();
  }, []);
  const handleRatingChange = (_event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const response = await axios.post(
        `http://localhost:5000/api/update/provider?companyName=${providerName}`,
        {
          zipcodes: zipcodes || null,
          MaxDownloadSpeedsUpTo: MaxDownloadSpeedsUpTo || null,
          Features: Features || null,
          Price: Price ? parseFloat(Price) : null,
          rating: rating || null,
          Channels: Channels || null,
        }
      );
      toast.success("Successfully Updated");
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response.data.message);
    }
    setloading(false);
  };

  return (
    <>
      <Toaster />

      <VerticalNavbar />
      <div className="Provider-container">
        <HeaderCommon title="Update Zip Code" />
        <Container maxWidth="sm">
          <h2 className="heading-1">Update Provider</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              select
              label="Provider Name"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              fullWidth
            >
              {companyNames.map((company, index) => (
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
              value={zipcodes}
              onChange={(e) => setzipcodes(e.target.value)}
            />
            <TextField
              label="Max Speed"
              fullWidth
              variant="outlined"
              margin="normal"
              value={MaxDownloadSpeedsUpTo}
              onChange={(e) => setMaxDownloadSpeedsUpTo(e.target.value)}
            />
            <TextField
              label="Channelss"
              fullWidth
              variant="outlined"
              margin="normal"
              value={Channels}
              onChange={(e) => setChannels(e.target.value)}
            />
            <TextField
              label="Features"
              fullWidth
              variant="outlined"
              margin="normal"
              value={Features}
              onChange={(e) => setFeatures(e.target.value)}
            />
            <TextField
              label="Price"
              fullWidth
              variant="outlined"
              margin="normal"
              value={Price}
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
              Update
            </LoadingButton>
          </form>
        </Container>
      </div>
    </>
  );
}

export default ProviderForm;
