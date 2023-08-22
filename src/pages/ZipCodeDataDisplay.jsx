import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Input,
} from "@mui/material";

function DataDisplay() {
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch all data when the component mounts
    const fetchAllData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all-data");
        return response.data; // Assuming the response data is an array of objects
      } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return an empty array or handle the error as needed
      }
    };

    // Call fetchAllData and set the data in the state
    fetchAllData().then((allData) => {
      setData(allData);
    });
  }, []);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await axios.post(
          "http://localhost:5000/upload-json",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Handle the response, e.g., show a success message
        console.log("File upload successful:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle the error, e.g., show an error message
      }
    } else {
      // Handle case where no file is selected, e.g., show a message to select a file
      console.error("No file selected");
    }
  };

  return (
    <div>
      {/* Add Item Button */}
      <div>
        <Input type="file" onChange={handleFileInputChange} />
        <Button variant="contained" color="primary" onClick={handleFileUpload}>
          Upload File
        </Button>
      </div>
      <h2>Data Table</h2>

      <TableContainer component={Paper} style={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Provider</TableCell>
              <TableCell>Prices starting at*</TableCell>
              <TableCell>Max download speeds up to</TableCell>
              <TableCell>Features</TableCell>
              <TableCell>Customer Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.Provider}</TableCell>
                <TableCell>{row["Prices starting at*"]}</TableCell>
                <TableCell>{row["Max download speeds up to"]}</TableCell>
                <TableCell>{row.Features}</TableCell>
                <TableCell>{row["Customer Rating"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataDisplay;
