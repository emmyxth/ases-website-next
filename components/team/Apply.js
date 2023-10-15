import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import LongButtonWOArrow from "../general/LongButtonWOArrow";

export default function Apply() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "500px",
        justifyContent: "center",
        margin: "50px auto",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          paddingBottom: "30px",
        }}
      >
        Want to Join?
      </h1>
      <LongButtonWOArrow text="Sign Up!" link="" />
    </Box>
  );
}
