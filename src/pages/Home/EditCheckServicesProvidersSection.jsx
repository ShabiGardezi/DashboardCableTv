import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VerticalNavbar from "../../components/Sidebar";
import HeaderCommon from "../HeaderCommon";

const EditCheckServicesProvidersSection = () => {
  // Define the initial state based on the provided object
  const initialCheckServicesProvidersState = {
    title: "About the Satellite",
    heading: "Our Satellite Mission",
    description: "Our satellite is on a mission to explore outer space.",
    fig_1: "Number of Satellites 1",
    fig_2: "Number of Satellites 2",
    fig_3: "Number of Satellites 3",
    CheckServicesProvidersBG: "Background Image of the CheckServicesProviders",
  };

  // Create state variables for CheckServicesProviders section
  const [checkServicesProviders, setCheckServicesProviders] = useState(
    initialCheckServicesProvidersState
  );

  // Create functions to update the state of the CheckServicesProviders section
  const handleCheckServicesProvidersUpdate = () => {
    // Update the state with the current values
    setCheckServicesProviders({ ...checkServicesProviders });
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    // Handle image upload here and set it in the state
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCheckServicesProviders({
          ...checkServicesProviders,
          CheckServicesProvidersBG: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <VerticalNavbar />
      <HeaderCommon title="Edit Check Services Providers Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">
                Edit Check Services Providers Section
              </Typography>

              {/* Edit Check Services Providers Section Fields */}
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={checkServicesProviders.title}
                onChange={(e) =>
                  setCheckServicesProviders({
                    ...checkServicesProviders,
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
                value={checkServicesProviders.heading}
                onChange={(e) =>
                  setCheckServicesProviders({
                    ...checkServicesProviders,
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
                value={checkServicesProviders.description}
                onChange={(e) =>
                  setCheckServicesProviders({
                    ...checkServicesProviders,
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
                value={checkServicesProviders.fig_1}
                onChange={(e) =>
                  setCheckServicesProviders({
                    ...checkServicesProviders,
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
                value={checkServicesProviders.fig_2}
                onChange={(e) =>
                  setCheckServicesProviders({
                    ...checkServicesProviders,
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
                value={checkServicesProviders.fig_3}
                onChange={(e) =>
                  setCheckServicesProviders({
                    ...checkServicesProviders,
                    fig_3: e.target.value,
                  })
                }
                margin="normal"
                variant="outlined"
              />

              {/* Upload Background Image */}
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
                  onClick={handleCheckServicesProvidersUpdate}
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

export default EditCheckServicesProvidersSection;
