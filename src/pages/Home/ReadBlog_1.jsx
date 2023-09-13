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
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import uploadImage from "../../utiles/imageUpload";
import { LoadingButton } from "@mui/lab";

const FullBlog_1 = () => {
  const url = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    image: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [data, setData] = useState({
    description: "fullblog_1.description",
  });
  const [loading, setloading] = useState(false);

  const handleImageUpload = (e) => {
    // Handle image upload here and set it in formData
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      let imageUrl = "";
      if (formData.image) {
        imageUrl = await uploadImage(formData.image);

        setFormData({
          ...formData,
          image: "",
        });
      }
      await axios.post(`${url}api/update/website`, {
        mongoObj: {
          description: data.description,
        },
        data: {
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
      <HeaderCommon title="Edit Blog => Full Blog 1" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Edit Full Blog 1</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  multiline={true}
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FullBlog_1;
