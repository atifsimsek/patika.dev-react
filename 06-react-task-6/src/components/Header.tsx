import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Typography,
  Link,
  Container,
} from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { wrap } from "module";
import { flexCenter, navLink } from "@/config/commonStyle";
import { grey } from "@mui/material/colors";

const Header = () => {
  return (
    <>
      <AppBar
        component="nav"
        sx={{
          height: 70,
          bgcolor: "primary.main",
          boxShadow: 2,
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
          }}
          href="/"
        >
          <Image src={logo} height={60} alt="logo" />
        </Link>
        <Typography sx={{ textAlign: "center" }}>Book API</Typography>
        <Box component="ul" sx={{ ...flexCenter, alignSelf: "end", gap: 3 }}>
          <Link
            href="/"
            underline="none"
            sx={{
              ...navLink,
            }}
          >
            Books
          </Link>
          <Link
            href="/"
            underline="none"
            sx={{
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
