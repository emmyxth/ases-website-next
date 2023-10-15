import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ShortButtonCustomized = ({ text, link }) => {
  return (
    <>
      <Button
        sx={{
          color: "black",
          backgroundColor: "transparent",
          borderRadius: 2,
          px: 2.5,
          py: 1.5,
          fontFamily: "Inter",
          fontSize: "calc(6px + 1.4vmin)",
          textTransform: "none",
          border: "1.3px solid black",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "calc(6px + 1.4vmin)",
          }}
        >
          {text}
        </Typography>
      </Button>
    </>
  );
};

export default ShortButtonCustomized;
