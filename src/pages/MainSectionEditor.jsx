import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VerticalNavbar from "../components/Sidebar";
const MainSectionEditor = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    // Handle image upload here and set it in formData
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and updating the Main Section data
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <VerticalNavbar />
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Edit Main Section</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <label>Upload Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Upload File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Update
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainSectionEditor;
