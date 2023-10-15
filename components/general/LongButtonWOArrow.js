import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const LongButtonWOArrowCustomized = ({ text, link }) => {
  return (
    <>
      <Button
        component="a"
        href={link}
        sx={{
          color: "white",
          backgroundColor: "black",
          borderRadius: 3,
          px: 3,
          py: 2,
          border: "1.5px solid black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "calc(6px + 1.4vmin)",
            fontWeight: "300",
            letterSpacing: ".07rem",
          }}
        >
          {text}
        </Typography>
      </Button>
    </>
  );
};

export default LongButtonWOArrowCustomized;
