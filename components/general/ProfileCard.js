"use client";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
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
            <div
              style={{ height: "calc(250px + 2vmin)", position: "relative" }}
            >
              <Image
                className="w-full h-auto"
                style={{
                  borderBottom: "1px solid black",
                  objectFit: "cover",
                }}
                src={image}
                fill={true}
                // width="268"
                // height="265"
                title="Profile Image"
                sizes="268px"
                priority={true}
              />
            </div>
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
