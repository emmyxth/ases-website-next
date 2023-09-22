import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import LongButtonWOArrow from "../../../components/LongButtonWOArrow"

export default function Apply() {

    return(
        <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", maxWidth: "500px", justifyContent:"center", margin: "50px auto"}}>
            <Typography style={{
              fontFamily: "Space Grotesk",
              fontSize: "60px",
              paddingBottom: "10px",
            }}>Want to Join?</Typography>
            <LongButtonWOArrow text="Sign Up!"/>
        </Box>
    );

}