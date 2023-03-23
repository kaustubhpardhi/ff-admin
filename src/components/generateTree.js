import React, { useEffect } from "react";
import ReactToPdf from "react-to-pdf";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PdfBody from "./PdfBody";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PrintIcon from "@mui/icons-material/Print";
import ReactToPrint from "react-to-print";

const GenerateTree = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  let pdfRef = React.createRef();

  useEffect(() => {
    if (!state) {
      navigate("/admin");
    }
  }, [state, navigate]);

  return (
    <Box sx={{ my: 4, pb: 4, maxWidth: "800px", mx: "auto" }}>
      <PdfBody
        information={state}
        forwardRef={pdfRef}
        ref={(el) => (pdfRef = el)}
      />
    </Box>
  );
};

export default GenerateTree;
