import { Typography } from "@mui/material";

export default function WhatYoullDo({ header, text, img }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={img} />
      <h1
        style={{
          fontSize: "calc(12px + 1vmin)",
          fontWeight: "normal",
          // fontFamily: "Inter",
          color: "black",
          maxWidth: "100%",
          paddingTop: "2%",
        }}
      >
        {header}
      </h1>
      <Typography
        sx={{
          fontSize: "calc(9px + 1vmin)",
          fontWeight: "300",
          color: "#667085",
          width: "50%",
          paddingTop: "2%",
        }}
      >
        {text}
      </Typography>
    </div>
  );
}
