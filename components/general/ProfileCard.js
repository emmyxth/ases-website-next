"use client";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const ProfileCard = ({ name, role, hoveredText, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Card
        sx={{
          width: "270px",
          height: "calc(308px + 3.2vmin)",
          backgroundColor: "F8F9FC",
          border: "1px solid black",
          borderRadius: 3,
          "&:hover": {
            backgroundColor: "black",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && (
          <>
            <CardMedia
              sx={{
                height: "calc(250px + 2vmin)",
                borderBottom: "1px solid black",
              }}
              image={image}
              title="Profile Image"
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              <Typography
                color="text.primary"
                align="center"
                sx={{
                  fontSize: "calc(10px + 1vmin)",
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{
                  fontSize: "calc(8px + 1vmin)",
                }}
              >
                {role}
              </Typography>
            </CardContent>
          </>
        )}
        {isHovered && (
          <>
            <CardContent>
              <Typography variant="body2" color="white">
                {hoveredText}
              </Typography>
            </CardContent>
          </>
        )}
      </Card>
    </>
  );
};

export default ProfileCard;
