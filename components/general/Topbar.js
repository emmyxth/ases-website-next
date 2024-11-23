"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import styles from "./Topbar.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Topbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [chaptersAnchorEl, setChaptersAnchorEl] = useState(null);
  const [mobileChaptersAnchorEl, setMobileChaptersAnchorEl] = useState(null);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleChaptersClick = (event) => {
    setChaptersAnchorEl(event.currentTarget);
  };

  const handleChaptersClose = () => {
    setChaptersAnchorEl(null);
  };

  const handleMobileChaptersClick = (event) => {
    setMobileChaptersAnchorEl(event.currentTarget);
  };

  const handleMobileChaptersClose = () => {
    setMobileChaptersAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        width: "100%",
        backgroundColor: "white",
        zIndex: "20",
        top: "0",
      }}
    >
      <Box className={styles.desktop} sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ background: "white" }}>
            <Link href="/">
              <img
                src="/logo-normal.jpg"
                alt={"ases logo"}
                width="33"
                height="33"
              ></img>
            </Link>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                marginLeft: 1,
                whiteSpace: "nowrap",
              }}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontSize: 40,
                    color: "#101828",
                    fontWeight: "bold",
                  }}
                >
                  ASES
                </Typography>
              </Link>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "35%",
                }}
              >
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
                <Link href="/#programs" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Programs
                  </Typography>
                </Link>
                <Link href="/#about" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    About
                  </Typography>
                </Link>
                <Link href="/#faq" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    FAQ
                  </Typography>
                </Link>
                <Link href="/team" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Team
                  </Typography>
                </Link>
                <Link href="/#sponsors" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Sponsors
                  </Typography>
                </Link>
                <Box>
                  <Typography
                    onClick={handleChaptersClick}
                    sx={{
                      fontSize: 16,
                      color: "#667085",
                      fontWeight: "bold",
                      marginRight: "20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    Chapters
                    <KeyboardArrowDownIcon />
                  </Typography>
                  <Menu
                    anchorEl={chaptersAnchorEl}
                    open={Boolean(chaptersAnchorEl)}
                    onClose={handleChaptersClose}
                  >
                    <MenuItem onClick={handleChaptersClose}>
                      <Link href="/london" style={{ textDecoration: "none", color: "#667085" }}>
                        London
                      </Link>
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#667085",
                  fontWeight: "bold",
                  marginRight: "20px",
                  visibility: "hidden",
                }}
              >
                Login/Sign Up
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className={styles.mobile} sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              background: "white",
            }}
          >
            <Link href="/">
              <img
                src="/logo-normal.jpg"
                alt={"ases logo"}
                width="33"
                height="33"
              ></img>
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                marginLeft: 1,
                whiteSpace: "nowrap",
              }}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontSize: 30,
                    color: "#101828",
                    fontWeight: "bold",
                  }}
                >
                  ASES
                </Typography>
              </Link>
              <Box>
                <IconButton edge="start" onClick={handleDrawerOpen}>
                  <MenuIcon sx={{ color: "#667085" }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        className="mobile"
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              marginLeft: 1,
              whiteSpace: "nowrap",
              marginRight: 10,
            }}
          >
            <img
              src="/logo-normal.jpg"
              alt={"ases logo"}
              width="33"
              height="33"
            ></img>
            <Typography
              sx={{
                fontSize: 30,
                color: "#101828",
                fontWeight: "bold",
                marginLeft: 1,
              }}
            >
              ASES
            </Typography>
          </Box>
          <IconButton edge="start" onClick={handleDrawerClose}>
            <CloseIcon sx={{ color: "#667085" }} />
          </IconButton>
        </Box>
        <Link href="/#home" style={{ textDecoration: "none" }}>
          <ListItem
            sx={{
              fontSize: 16,
              color: "#667085",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            Home
          </ListItem>
        </Link>
        <Link href="/#programsHome" style={{ textDecoration: "none" }}>
          <ListItem
            sx={{
              fontSize: 16,
              color: "#667085",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            Programs
          </ListItem>
        </Link>
        <Link href="/#about" style={{ textDecoration: "none" }}>
          <ListItem
            sx={{
              fontSize: 16,
              color: "#667085",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            About
          </ListItem>
        </Link>
        <Link href="/#faq" style={{ textDecoration: "none" }}>
          <ListItem
            sx={{
              fontSize: 16,
              color: "#667085",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            FAQ
          </ListItem>
        </Link>
        <Link href="/team" style={{ textDecoration: "none" }}>
          <ListItem
            sx={{
              fontSize: 16,
              color: "#667085",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            Team
          </ListItem>
        </Link>
        <Link href="/#sponsors" style={{ textDecoration: "none" }}>
          <ListItem
            sx={{
              fontSize: 16,
              color: "#667085",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            Sponsors
          </ListItem>
        </Link>
        <ListItem
          onClick={handleMobileChaptersClick}
          sx={{
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}
        >
          Chapters
          <KeyboardArrowDownIcon />
        </ListItem>
        <Menu
          anchorEl={mobileChaptersAnchorEl}
          open={Boolean(mobileChaptersAnchorEl)}
          onClose={handleMobileChaptersClose}
        >
          <MenuItem onClick={handleMobileChaptersClose}>
            <Link href="/london" style={{ textDecoration: "none", color: "#667085" }}>
              London
            </Link>
          </MenuItem>
        </Menu>
        <ListItem
          sx={{
            fontSize: 16,
            color: "#667085",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          Login/Sign Up
        </ListItem>
      </Drawer>
    </Box>
  );
}
