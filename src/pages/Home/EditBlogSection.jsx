import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VerticalNavbar from "../../components/Sidebar";
import HeaderCommon from "../HeaderCommon";
import "../../styles/MainSectionEditor.css";
import "../../styles/EditBlogSection.css";
const EditBlogSection = () => {
  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //STATE FOR BLOG SECTION
  const [data, setData] = useState({
    title: "Home.blogs.title",
    heading: "Home.blogs.heading",
    description: "Home.blogs.description",
  });

  // STATES FOR CARDS ISNIDE BLOG SECTION
  const [blogsData, setBlogsData] = useState({
    card_1: {
      img1: "Home.blogs.card_1.img1",
      heading: "Home.blogs.card_1.heading",
      description: "Home.blogs.card_1.description",
    },
    card_2: {
      img2: "Home.blogs.card_2.img2",
      heading: "Home.blogs.card_2.heading",
      description: "Home.blogs.card_2.description",
    },
    card_3: {
      img3: "Home.blogs.card_3.img3",
      heading: "Home.blogs.card_3.heading",
      description: "Home.blogs.card_3.description",
    },
  });
  // State for each card
  const [card1Data, setCard1Data] = useState(blogsData.card_1);
  const [card2Data, setCard2Data] = useState(blogsData.card_2);
  const [card3Data, setCard3Data] = useState(blogsData.card_3);

  // Functions to update card data
  const handleCard1Update = (newData) => {
    setCard1Data({ ...card1Data, ...newData });
  };

  const handleCard2Update = (newData) => {
    setCard2Data({ ...card2Data, ...newData });
  };

  const handleCard3Update = (newData) => {
    setCard3Data({ ...card3Data, ...newData });
  };

  const handleImageUpload = (e) => {
    // Handle image upload here and set it in formData
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <VerticalNavbar />
      <HeaderCommon title="Edit Home Page Blog Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Edit Blog Section</Typography>
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
                  multiline // This enables multiline input
                />

                <div className="updatebtn">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </div>
              </form>
            </Paper>
            <Card>
              <Typography variant="h6">Edit Blog Card-1 </Typography>

              <CardContent>
                <TextField
                  fullWidth
                  label="Card Heading 1"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Card Description 1"
                  variant="outlined"
                  margin="normal"
                  multiline
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
                <div className="updatebtn">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <Typography variant="h6">Edit Blog Card-2 </Typography>

              <CardContent>
                <TextField
                  fullWidth
                  label="Card Heading 2"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Card Description 2"
                  variant="outlined"
                  margin="normal"
                  multiline
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
                <div className="updatebtn">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <Typography variant="h6">Edit Blog Card-3 </Typography>

              <CardContent>
                <TextField
                  fullWidth
                  label="Card Heading 3"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Card Description 3"
                  variant="outlined"
                  margin="normal"
                  multiline
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
                <div className="updatebtn">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditBlogSection;
