import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VerticalNavbar from "../../components/Sidebar";
import HeaderCommon from "../HeaderCommon";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
// import "../styles/EditCheckServicesProvidersSection.css"; // You can create this CSS file

const EditCheckServicesProvidersSection = () => {
  // Define the initial state based on the provided object
  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    description: "",
    fig_1: "",
    fig_2: "",
    fig_3: "",
    aboutshopsatelliteBG: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [data, setData] = useState({
    title: "Home.checkservicesproviders.title",
    heading: "Home.checkservicesproviders.heading",
    description: "Home.checkservicesproviders.description",
    fig_1: "Home.checkservicesproviders.fig_1",
    fig_2: "Home.checkservicesproviders.fig_2",
    fig_3: "Home.checkservicesproviders.fig_3",
    aboutshopsatelliteBG:
      "Home.checkservicesproviders.CheckServicesProvidersBG",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/update/website`, {
        mongoObj: {
          title: data.title,
          heading: data.heading,
          description: data.description,
          fig_1: data.fig_1,
          fig_2: data.fig_2,
          fig_3: data.fig_3,
          CheckServicesProvidersBG: data.CheckServicesProvidersBG,
        },
        data: {
          title: formData.title,
          heading: formData.heading,
          description: formData.description,
          fig_1: formData.fig_1,
          fig_2: formData.fig_2,
          fig_3: formData.fig_3,
          CheckServicesProvidersBG: formData.CheckServicesProvidersBG,
        },
      });

      toast("successfully uploaded");
    } catch (error) {
      toast("Error Occured");
      console.log(error);
    }
  };
  const handleImageUpload = (e) => {
    // Handle image upload here and set it in formData
  };
  return (
    <>
      <VerticalNavbar />
      <HeaderCommon title="Edit About Shop Satellite TV Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">
                Edit About Shop Satellite TV Section
              </Typography>
              <form onSubmit={handleSubmit}>
                {/* Edit About Shop Satellite TV Section Fields */}
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
                  label="Heading"
                  name="heading"
                  value={formData.heading}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  multiline
                />
                <TextField
                  fullWidth
                  label="Figure 1"
                  name="fig_1"
                  value={formData.fig_1}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Figure 2"
                  name="fig_2"
                  value={formData.fig_2}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Figure 3"
                  name="fig_3"
                  value={formData.fig_3}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <div className="uploadimg">
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
                </div>

                {/* Update Button */}
                <div className="updatebtn">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditCheckServicesProvidersSection;
