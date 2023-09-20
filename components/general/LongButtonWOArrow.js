import React from "react";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LongButtonWOArrowCustomized = ({ text }) => {
  return (
    <>
      <Button
        sx={{
          color: "white",
          backgroundColor: "black",
          borderRadius: 3,
          px: "calc(45px + 4vmin)",
          py: 2,
          fontFamily: "Inter",
          fontSize: "calc(7px + 1.6vmin)",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default LongButtonWOArrowCustomized;
