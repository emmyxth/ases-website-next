"use client";
import React from "react";
// import Pear from "@/public/Pear.jpg";
// import Renn from "@/public/Renn.jpg";
// import Softbank from "@/public/Softbank.jpg";
// import Think from "@/public/Think.jpg";
// import WIL from "@/public/WIL.jpg";
// import ZhenFund from "@/public/ZhenFund.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./SponsorsBanner.module.css";
import Image from "next/image";

const SponsorsBanner = () => {
  const images = [
    "/Pear.jpg",
    "/Renn.jpg",
    "/Softbank.jpg",
    "/Think.jpg",
    "/WIL.jpg",
    "/ZhenFund.jpg",
  ];
  return (
    // <a  suppressHydrationWarning>
    <Box sx={{ borderTop: "1px solid black", background: "white" }}>
      <a id="sponsors">
        <h1
          style={{
            // // fontFamily: "Space Grotesk",
            fontSize: 40,
            fontWeight: 500,
            textAlign: "center",
            marginTop: 25,
            marginBottom: 25,
          }}
        >
          Sponsored by
        </h1>
      </a>

      <Box className={styles.logoSlider} sx={{ marginBottom: "50px" }}>
        <Box className={styles.logos}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sponsor Logos`}
              width="500"
              height="200"
              className={styles.logo}
            />
          ))}
        </Box>
        <Box className={styles.logos}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sponsor Logos`}
              width="500"
              height="200"
              className={styles.logo}
            />
          ))}
        </Box>
      </Box>
    </Box>
    // </a>
  );
};

export default SponsorsBanner;
