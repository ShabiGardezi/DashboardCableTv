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

import axios from "axios";

const EditHeroCommonAbout = () => {
  const url = process.env.REACT_APP_API_URL;
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
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

  const [data, setData] = useState({
    heading: "AboutUs.HeroCommon.heading",
    description: "AboutUs.HeroCommon.description",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);

      await axios.post(`${url}api/update/website`, {
        mongoObj: {
          heading: data.heading,
          description: data.description,
        },
        data: {
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
      <HeaderCommon title="AboutUs Page => Hero Common Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Edit Hero Common Section</Typography>
              <form onSubmit={handleSubmit}>
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

export default EditHeroCommonAbout;
