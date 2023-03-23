import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { yellow } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

import moment from "moment";

const getPageMargins = () => {
  const pageStyle = `
  @page {
    size: auto;  
    margin: 0mm;
   marks: crop cross;
  // margin: 20px;
     margin-left: 8px;
   margin-top:8px;
  
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    title {
      display: none;
    }
    .pagebreak {
      page-break-before: always;
    }
    .pdfBody{
        height: 5.5in;
        width: 4in;
        padding: 12px !important;
    }
    .pdfBody h5{
        font-size: 12px !important;
    }
    .printFlex{
        display: flex;
    }
    .printFlex > div{
        width: 50%;
    }
    .printFlex img{
        width:  1.8in;
        height: 1in;
    }

    .pdfTable {
        font-size: 10px !important;
    }
    .pdfBottom{
        display: flex
    }
    .pdfBottomFirst{
        width: 66%;
        font-size: 10px !important;
    }
    .pdfBottomImg{
        width: 1in !important;
    }
    .pdfAmount{
        font-size: 14px ! important;
    }
  }
`;
  return pageStyle;
};

class PdfBody extends React.Component {
  render() {
    const { information, forwardRef } = this.props;
    console.log(information);
    return (
      <div>
        <style>{getPageMargins()}</style>
        <Box
          ref={forwardRef}
          className="pdfBody"
          sx={{
            py: 4,
            px: 4,
            background: grey[100],
            border: "1px solid black",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#8c2d29",
              fontWeight: "700",
              textAlign: "center",
              my: 0,
            }}
            gutterBottom
          >
            Family Tree
          </Typography>

          <Box
            className="printFlex"
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "repeat(0, 1fr)" },
              gap: 3,
            }}
          >
            {/* heading */}

            <div>
              {/* body */}
              <table style={{ textAlign: "left" }} className="pdfTable">
                <tbody>
                  <tr>
                    <th> Name </th>
                    <td> : {information?.username} </td>
                  </tr>
                  <tr>
                    <th>Father's Name </th>
                    <td> : {information?.fatherName}</td>
                  </tr>
                  <tr>
                    <th> Mother's Name </th>
                    <td> : {information?.mother} </td>
                  </tr>
                  <tr>
                    <th> Business </th>
                    <td> : {information?.business} </td>
                  </tr>
                  <tr>
                    <th> Business Address </th>
                    <td>: {information?.businessAddress}</td>
                  </tr>
                  <tr>
                    <th> email </th>
                    <td> : {information?.email} </td>
                  </tr>
                  <tr>
                    <th>Childrens </th>
                    {information.children.map((child) => (
                      <td> : Name:{child.name}</td>
                    ))}
                  </tr>
                  <tr>
                    <th> Brothers </th>
                    {information.brother.map((brother) => (
                      <td>
                        Name : {brother.name} , Spouse Name:{brother.spouseName}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Sisters</th>
                    {information.sister.map((sister) => (
                      <td>
                        Name : {sister.name} , Husband Name:{sister.spouseName}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>

          {/* footer */}
          <Box
            className="pdfBottom"
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "2fr 1fr" },
              gap: 1,
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <Box sx={{ display: "flex" }} className="pdfBottomSecond">
              <Box sx={{ marginLeft: "auto" }}></Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

export default PdfBody;
