import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Link from "next/link";

const ShortButtonCustomized = ({ text, link = "#", color = "black" }) => {
  return (
    <Link href={link} passHref>
      <Button
        component="a"
        sx={{
          color: color,
          backgroundColor: "transparent",
          borderRadius: 2,
          px: 2.5,
          py: 1.5,
          fontFamily: "Inter",
          fontSize: "calc(6px + 1.4vmin)",
          textTransform: "none",
          border: "1.3px solid",
          borderColor: color,
          "&:hover": {
            backgroundColor: color,
            color: color === "black" ? "white" : "black",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "calc(9px + 1.2vmin)",
            fontWeight: "300",
            letterSpacing: ".07rem",
          }}
        >
          {text}
        </Typography>
      </Button>
    </Link>
  );
};

export default ShortButtonCustomized;
