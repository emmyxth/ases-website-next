import React, { useState, useEffect } from "react";
import Pear from "../../../images/Pear.png";
import Renn from "../../../images/Renn.png";
import Softbank from "../../../images/Softbank.png";
import Think from "../../../images/Think.png";
import WIL from "../../../images/WIL.png";
import ZhenFund from "../../../images/ZhenFund.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./SponsorsBanner.css";

const SponsorsBanner = () => {
  const images = [Pear, Renn, Softbank, Think, WIL, ZhenFund];

  return (
    <a id="sponsors">
      <Box sx={{ borderTop: "1px solid black", background: "white" }}>
        <Typography
          sx={{
            fontFamily: "Space Grotesk",
            fontSize: 30,
            fontWeight: 600,
            textAlign: "center",
            marginTop: 2,
          }}
        >
          Sponsored by
        </Typography>
        <Box className="logo-slider">
          <Box className="logos">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Sponsor Logos`}
                className="logo"
              />
            ))}
          </Box>
          <Box className="logos">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Sponsor Logos`}
                className="logo"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </a>
  );
};

export default SponsorsBanner;
