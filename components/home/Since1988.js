import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TypingText from "../general/TypingText";
import Image from "next/image";

export default function Since1988() {
  return (
    <a id="about">
      <Box
        sx={{
          background: "white",
          height: "600px",
          // borderTop: "1px solid black",
          display: "flex",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            height: "800px",
            position: "relative",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            // borderRight: "1px solid black",
            padding: "3rem",
          }}
        >
          <TypingText
            textStyle={{
              // fontFamily: "Space Grotesk",
              fontSize: "calc(30px + 3vmin)",
              color: "#4470B6",
              marginBottom: "3%",
              textAlign: "left",
              fontWeight: "400",
            }}
            words={["Since 1988"]}
            noDelete={true}
          />
          <Typography
            sx={{
              // fontFamily: "Inter",
              fontSize: "calc(10px + 1.4vmin)",
              fontWeight: "300",
              color: "#667085",
            }}
          >
            ASES (Affiliated Stanford Entrepreneurial Students) was founded at
            Stanford University in 1998 with the goal of connecting student
            entrepreneurs all over the world. Today, active ASES chapters
            provide educational programs on entrepreneurship, design, and
            venture capital for students across the globe. We challenge our
            members to think beyond Silicon Valley and solve global problems.
          </Typography>
        </Box>
        <div
          style={{
            flex: 1,
            backgroundColor: "rgba(236, 132, 140, 0.44)",
            overflow: "hidden",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src="/Since1988Image.png"
            alt={"Since1988Image"}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </Box>
    </a>
  );
}
