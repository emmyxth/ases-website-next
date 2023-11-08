import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import logo_color from "../../public/logo-white.jpg";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: 10,
        marginBottom: -20,
        rowGap: "2rem",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "0.6rem",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          justifySelf: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            alignItems: "center",
          }}
        >
          <a href="/">
            <img
              alt={"white ASES logo"}
              src="/logo-white.png"
              width="33"
              height="33"
            ></img>
          </a>

          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              sx={{
                // fontFamily: "Space Grotesk",
                fontSize: "calc(20px + 1vmin)",
                fontWeight: 600,
                marginLeft: 1,
              }}
            >
              ASES
            </Typography>
          </a>
        </Box>
        <Typography className="footer_body" sx={{ paddingTop: 1 }}>
          Solve Global Problems
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", columnGap: "0.2rem" }}
        >
          <IconButton href="https://www.instagram.com/asesstanford/?hl=en">
            <InstagramIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/company/asesstanford/mycompany/">
            <LinkedInIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton href="https://web.facebook.com/ASESStanford/?_rdc=1&_rdr">
            <FacebookIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: "3rem",
          flexWrap: "wrap",
          rowGap: "2rem",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <a
            href="/bootcamp"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              Bootcamp
            </Typography>
          </a>
          <a href="/vc3" style={{ textDecoration: "none", color: "white" }}>
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              VC3
            </Typography>
          </a>
          <a href="/summit" style={{ textDecoration: "none", color: "white" }}>
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              Summit
            </Typography>
          </a>
          <a
            href="/breakthrough"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              Breakthrough
            </Typography>
          </a>
          <a
            href="/launchpad"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography className="footer_body">Launchpad</Typography>
          </a>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <a
            href="/#programs"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              Programs
            </Typography>
          </a>
          <a href="/#about" style={{ textDecoration: "none", color: "white" }}>
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              About
            </Typography>
          </a>
          <a href="/#faq" style={{ textDecoration: "none", color: "white" }}>
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              FAQ
            </Typography>
          </a>
          <a href="/team" style={{ textDecoration: "none", color: "white" }}>
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              Team
            </Typography>
          </a>
          <a
            href="/#sponsors"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography className="footer_body" sx={{ paddingBottom: "10px" }}>
              Sponsors
            </Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
