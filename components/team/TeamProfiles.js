"use client";
import Box from "@mui/material/Box";
import React from "react";
import styles from "./TeamProfiles.module.css";
import ProfileCard from "../general/ProfileCard";
import profileData from "@/public/textContent/teamProfileCards.json";

export default function TeamProfile() {
  return (
    <Box className={styles.profile_cards}>
      <video className={styles.teams_gradient} autoPlay loop muted playsInline>
        <source src="/bootcamp-hero-gradient.mp4" type="video/mp4" />
      </video>
      <Box className={styles.desktop}>
        <Box className={styles.gridContainer}>
          {profileData.map((m, index) => (
            <ProfileCard
              key={index}
              name={m.name}
              role={m.role}
              hoveredText={m.description}
              image={m.image}
              hover={true}
            />
          ))}
        </Box>
      </Box>
      <Box className={styles.mobile}>
        <Box className={styles.verticalContainer}>
          {profileData.map((m, index) => (
            <ProfileCard
              key={index}
              name={m.name}
              role={m.role}
              hoveredText={m.description}
              image={m.image}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
