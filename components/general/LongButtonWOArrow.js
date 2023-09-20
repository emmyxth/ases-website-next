import React from "react";
import Button from "@mui/material/Button";

const LongButtonWOArrowCustomized = ({ text }) => {
  return (
    <>
      <Button
        sx={{
          color: "black",
          backgroundColor: "black",
          borderRadius: 3,
          px: "calc(45px + 4vmin)",
          py: 2,
          fontFamily: "Inter",
          border: "1.2px solid black",
          fontSize: "calc(7px + 1.6vmin)",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
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
