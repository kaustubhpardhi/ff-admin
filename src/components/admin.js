import React, { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Box, CircularProgress, IconButton, Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import DownloadExcelButton from "./DownloadExcelButton";
import "./admin.css";
import logo from "./meerut.jpg";
import bob from "./bob.webp";
const Admin = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("/form/getforms", {}).then((res) => {
      setForms(res.data.packages);
    });
  }, []);

  const formViewHandler = (form) => {
    const {
      username,
      fatherName,
      business,
      businessAddress,
      email,
      mother,
      brother,
      sister,
      children,
    } = form;
    const information = {
      username: username,
      fatherName: fatherName,
      business: business,
      businessAddress: businessAddress,
      email: email,
      mother: mother,
      brother: brother,
      sister: sister,
      children: children,
    };
    navigate("/tree ", { state: information });
  };

  return (
    <div className="admin">
      <div className="table-title">
        <p>Form Entries 👇</p>
      </div>

      <div className="forms-table">
        <Paper sx={{ width: "100%", borderRadius: 2, ml: 2, mr: 2 }}>
          <TableContainer sx={{}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center"> Name </TableCell>
                  <TableCell align="center"> Father's Name </TableCell>
                  <TableCell align="center"> Mother's Name</TableCell>
                  <TableCell align="center"> Business </TableCell>
                  <TableCell align="center"> Family Details </TableCell>
                </TableRow>
              </TableHead>
              {
                <TableBody>
                  {forms.map((row, index) => (
                    <TableRow key={row.username} hover role="checkbox">
                      <TableCell align="center">{row.username} </TableCell>
                      <TableCell align="center"> {row.fatherName} </TableCell>
                      <TableCell align="center"> {row.mother} </TableCell>
                      <TableCell align="center"> {row.business} </TableCell>
                      <TableCell align="center">
                        <IconButton
                          color="secondary"
                          onClick={() => formViewHandler(row)}
                        >
                          <VisibilityTwoToneIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              }
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default Admin;
