import React from "react";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LongButtonWArrowCustomized = ({ text }) => {
  return (
    <>
      <Button
        sx={{
          color: "black",
          backgroundColor: "white",
          borderRadius: 3,
          px: 3,
          py: 2,
          fontFamily: "Inter",
          fontSize: "calc(6px + 1.4vmin)",
          border: "1px solid black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        endIcon={<ArrowForwardIcon sx={{ fontSize: 40 }} />}
      >
        {text}
      </Button>
    </>
  );
};

export default LongButtonWArrowCustomized;
