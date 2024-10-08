"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TypingText from "../general/TypingText";
import ProfileCard from "../general/ProfileCard.js";
import profileData from "@/public/textContent/homeProfileCards.json";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % profileData.length);
  };

  const handleBackCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? profileData.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        borderBottom: "1px solid black",
        borderTop: "1px solid black",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "1rem",
      }}
    >
      <video
        src="./gradient.mp4"
        autoPlay
        loop
        muted
        playsInline
        id="video"
        style={{
          position: "absolute",
          zIndex: -1,
          height: "110%",
          width: "100%",
          objectFit: "cover",
        }}
      >
        <source src="gradient" type="video/mp4" />
      </video>
      <Box
        sx={{
          padding: "2rem",
          paddingY: "5%",
        }}
      >
        <TypingText
          textStyle={{
            // fontFamily: "Space Grotesk",
            fontSize: "calc(30px + 3vmin)",
            fontWeight: "400",
            lineHeight: "2.5rem",
            marginBottom: "4%",
            textAlign: "center",
            "@media (maxWidth: 1024px)": {
              marginBottom: "calc(1% + 2vmin)",
              padding: "calc(1rem + 1vmin)",
            },
          }}
          words={["Hear from our members"]}
          noDelete={true}
        />
        <Box className={styles.desktop}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "4rem",
            }}
          >
            {profileData.map((m) => {
              return (
                <ProfileCard
                  name={m.name}
                  role={m.role}
                  hoveredText={m.description}
                  image={m.image}
                />
              );
            })}
          </Box>
        </Box>
        <Box className={styles.mobile}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "0.4rem",
              "@media (max-width: 500px)": {
                padding: "1rem",
              },
            }}
          >
            <IconButton
              edge="start"
              onClick={handleBackCard}
              sx={{
                backgroundColor: "black",
                borderRadius: 3,
                marginStart: "3rem",
              }}
            >
              <NavigateBeforeIcon sx={{ color: "white" }} />
            </IconButton>
            <ProfileCard
              name={profileData[currentCardIndex].name}
              role={profileData[currentCardIndex].role}
              hoveredText={profileData[currentCardIndex].description}
              image={profileData[currentCardIndex].image}
            />
            <IconButton
              edge="end"
              onClick={handleNextCard}
              sx={{ backgroundColor: "black", borderRadius: 3 }}
            >
              <NavigateNextIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
