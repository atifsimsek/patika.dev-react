import { AppBar, Box, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { flexCenter, navLink } from "@/styles/commonStyle";
import { grey } from "@mui/material/colors";

const Header = () => {
  const [fixed, setFixed] = useState<boolean>(false);

  // Scroll listen
  const headerFixed = () => {
    if (window.scrollY >= 70) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFixed);
    return () => {
      window.removeEventListener("scroll", headerFixed);
    };
  }, []);
  return (
    <>
      <AppBar
        component="nav"
        sx={{
          height: 70,
          bgcolor: fixed ? "primary.main" : "transparent",
          color: fixed ? "black" : "primary.light",
          boxShadow: 2,
          transition: "all 0.3s",
          padding: 2,
          flexWrap: "wrap",
          ...flexCenter,
        }}
      >
        <Link
          sx={{
            "&:hover": { backgroundColor: `${grey[100]}` },
            ...flexCenter,
            alignSelf: "start",
            paddingY: "5px",
            transition: "all 0.3s",
          }}
          href="/"
        >
          <Image src={logo} height={60} alt="logo" />
        </Link>
        <Typography
          sx={{
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute",
          }}
        >
          Book API
        </Typography>
        <Box component="ul" sx={{ ...flexCenter, alignSelf: "end", gap: 3 }}>
          <Link
            href="/"
            underline="none"
            sx={{
              color: fixed ? "black" : "primary.light",
              ...navLink,
            }}
          >
            Books
          </Link>
          <Link
            href="/"
            underline="none"
            sx={{
              color: fixed ? "black" : "primary.light",
              ...navLink,
            }}
          >
            About
          </Link>
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
