import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VerticalNavbar from "../../components/Sidebar";
import HeaderCommon from "../HeaderCommon";
import "../../styles/MainSectionEditor.css";

const EditFooterSection = () => {
  const [formData, setFormData] = useState({
    footer_text: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [data, setData] = useState({
    footer_text: "Home.Footer.footer_text",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <VerticalNavbar />
      <HeaderCommon title="Edit Home Page Footer Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Edit Footer Section</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Footer Description"
                  name="footer_text"
                  value={formData.footer_text}
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditFooterSection;
