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

// import "../styles/EditAboutShopSatelliteTVSection.css"; // You can create this CSS file

const EditAboutShopSatelliteTVSection = () => {
  // Define the initial state based on the provided object
  const initialAboutShopSatelliteTVState = {
    title: "About the Satellite",
    heading: "Our Satellite Mission",
    description: "Our satellite is on a mission to explore outer space.",
    fig_1: "Number of Satellites 1",
    fig_2: "Number of Satellites 2",
    fig_3: "Number of Satellites 3",
    aboutshopsatelliteBG: "Background Image for About Shop Satellite Section",
  };

  // Create state variables for aboutshopsatellitetv section
  const [aboutShopSatelliteTV, setAboutShopSatelliteTV] = useState(
    initialAboutShopSatelliteTVState
  );

  // Create functions to update the state of the aboutshopsatellitetv section
  const handleAboutShopSatelliteTVUpdate = () => {
    // Update the state with the current values
    setAboutShopSatelliteTV({ ...aboutShopSatelliteTV });
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

              {/* Edit About Shop Satellite TV Section Fields */}
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={aboutShopSatelliteTV.title}
                onChange={(e) =>
                  setAboutShopSatelliteTV({
                    ...aboutShopSatelliteTV,
                    title: e.target.value,
                  })
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Heading"
                name="heading"
                value={aboutShopSatelliteTV.heading}
                onChange={(e) =>
                  setAboutShopSatelliteTV({
                    ...aboutShopSatelliteTV,
                    heading: e.target.value,
                  })
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={aboutShopSatelliteTV.description}
                onChange={(e) =>
                  setAboutShopSatelliteTV({
                    ...aboutShopSatelliteTV,
                    description: e.target.value,
                  })
                }
                margin="normal"
                variant="outlined"
                multiline
              />
              <TextField
                fullWidth
                label="Figure 1"
                name="fig_1"
                value={aboutShopSatelliteTV.fig_1}
                onChange={(e) =>
                  setAboutShopSatelliteTV({
                    ...aboutShopSatelliteTV,
                    fig_1: e.target.value,
                  })
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Figure 2"
                name="fig_2"
                value={aboutShopSatelliteTV.fig_2}
                onChange={(e) =>
                  setAboutShopSatelliteTV({
                    ...aboutShopSatelliteTV,
                    fig_2: e.target.value,
                  })
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Figure 3"
                name="fig_3"
                value={aboutShopSatelliteTV.fig_3}
                onChange={(e) =>
                  setAboutShopSatelliteTV({
                    ...aboutShopSatelliteTV,
                    fig_3: e.target.value,
                  })
                }
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
                  onClick={handleAboutShopSatelliteTVUpdate}
                  style={{ marginTop: "10px" }}
                >
                  Update
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditAboutShopSatelliteTVSection;
