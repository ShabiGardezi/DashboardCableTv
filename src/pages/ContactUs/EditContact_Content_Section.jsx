import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import VerticalNavbar from "../../components/Sidebar";
import HeaderCommon from "../HeaderCommon";
import "../../styles/MainSectionEditor.css";
import { Toaster, toast } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";

const HeroCommonContactUs = () => {
  const [loading, setloading] = useState(false);

  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    title: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [data, setData] = useState({
    heading: "ContactUs.Contact_Content.heading",
    description: "ContactUs.Contact_Content.description",
    title: "ContactUs.Contact_Content.title",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/update/website`, {
        mongoObj: {
          title: data.title,
          heading: data.heading,
          description: data.description,
        },
        data: {
          title: formData.title,
          heading: formData.heading,
          description: formData.description,
        },
      });

      toast.success("successfully uploaded");
    } catch (error) {
      if (typeof error === "object") toast.error(error.message);
      else toast.error("Error Occured");
      console.log(error);
    }
    setloading(false);
  };
  return (
    <>
      <Toaster />
      <VerticalNavbar />
      <HeaderCommon title="ContactUs Page => Contact Content Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Edit Contact Content Section</Typography>
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
                  <LoadingButton
                    loading={loading}
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </LoadingButton>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeroCommonContactUs;
