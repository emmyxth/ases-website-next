"use client";
import React from "react";
// import Pear from "@/public/Pear.png";
// import Renn from "@/public/Renn.png";
// import Softbank from "@/public/Softbank.png";
// import Think from "@/public/Think.png";
// import WIL from "@/public/WIL.png";
// import ZhenFund from "@/public/ZhenFund.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./SponsorsBanner.module.css";
import Image from "next/image";

const SponsorsBanner = () => {
  const images = [
    "/Pear.png",
    "/Renn.png",
    "/Softbank.png",
    "/Think.png",
    "/WIL.png",
    "/ZhenFund.png",
  ];

  return (
    <a id="sponsors">
      <Box sx={{ borderTop: "1px solid black", background: "white" }}>
        <Typography
          sx={{
            fontFamily: "Space Grotesk",
            fontSize: 30,
            fontWeight: 500,
            textAlign: "center",
            marginTop: 2,
          }}
        >
          Sponsored by
        </Typography>
        <Box className={styles.logoSlider}>
          <Box className={styles.logos}>
            {images.map((image, index) => (
              <Image
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
              <Image
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
    </a>
  );
};

export default SponsorsBanner;
