import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import LongButtonWOArrow from "../general/LongButtonWOArrow"
import TypingText from "../general/TypingText"

export default function Apply() {

    return(
        <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", maxWidth: "500px", justifyContent:"center", margin: "50px auto"}}>
            <h1 style={{
              // fontFamily: "Space Grotesk",
              fontSize: "60px",
              paddingBottom: "10px",
              fontWeight: "500",
              paddingBottom: "10px",
            }}>We are a team of</h1>
            <Box style={{width: "500px", height: "80px", backgroundColor:"#B8E4F9", display: "flex", alignContent: "center", justifyContent: "center"}}>
                <TypingText textStyle={{
            // fontFamily: "Space Grotesk",
            fontSize: "60px",
            textAlign: "center",
          }}
          words={["entrepreneurs", "scientists", "researchers", "engineers", "innovators", "students"]}
          noDelete={false}/>
            </Box>
            <Box style={{width: "500px", height: "80px", backgroundColor:"#000000", top: "-65px", left: "10px", position: "relative", zIndex: "-1"}} />
        </Box>
    );

}