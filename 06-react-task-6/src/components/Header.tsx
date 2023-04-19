import { Box, Typography, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import { flexCenter } from '@/styles/commonStyle';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [fixed, setFixed] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  // Function to listen for scroll events and update header visibility
  const headerFixed = () => {
    if (window.scrollY >= 70) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  // Add event listener for scroll on mount and remove on unmount
  useEffect(() => {
    window.addEventListener('scroll', headerFixed);
    return () => {
      window.removeEventListener('scroll', headerFixed);
    };
  }, []);

  // Styles for logo
  const header = {
    height: 70,
    bgcolor: fixed ? 'primary.main' : 'transparent',
    color: fixed ? 'black' : 'primary.light',
    boxShadow: 2,
    transition: 'all 0.3s',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: 2,
    display: 'flex',
    zIndex: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  // Styles for logo
  const logoStyles = {
    ...flexCenter,
    paddingY: '5px',
    transition: 'all 0.3s',
  };

  // Styles for main title
  const mainTitle = {
    fontSize: '1.4rem',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
  };

  // Styles for link
  const navLink = {
    '&:hover': { backgroundColor: `primary.light`, color: 'black' },
    transition: 'all 0.3s',
    paddingX: 2,
    paddingY: 3.3,
  };

  const mobile = {
    ...flexCenter,
    display: { xs: 'flex', sm: 'flex', md: 'none' },
    transform: open ? 'translateY(-170px)' : 'translateY(0px)',
    transition: 'all 1s',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 150,
    backgroundColor: 'rgba(19, 18, 18, 0.658)',
    gap: 5,
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          ...header,
        }}
      >
        {/* Logo */}
        <Link href={'/'}>
          <Box sx={{ ...logoStyles }}>
            <Image className="logo" src={logo} height={60} alt="logo" />
          </Box>
        </Link>

        {/* Main title */}
        <Typography sx={{ ...mainTitle }} variant="h1">
          My Library
        </Typography>

        {/* Mobile Nav links */}
        <IconButton
          sx={{
            display: { xs: 'flex', sm: 'flex', md: 'none' },
            color: fixed ? 'black' : 'primary.light',
            zIndex: 100,
          }}
          onClick={() => {
            setOpen(!open);
          }}
          aria-label="delete"
        >
          {open ? <MenuIcon /> : <CloseIcon />}
        </IconButton>

        <Box
          component={'div'}
          sx={{
            ...mobile,
          }}
        >
          <Link style={{ textDecoration: 'none' }} href={'/'}>
            <Box
              component={'span'}
              sx={{
                color: 'primary.light',
              }}
            >
              Books
            </Box>
          </Link>
          <Link style={{ textDecoration: 'none' }} href={'/about'}>
            <Box
              component={'span'}
              sx={{
                color: 'primary.light',
              }}
            >
              About
            </Box>
          </Link>
        </Box>
        {/* Mobile Nav links */}
        {/* Navigation links */}
        <Box
          component="ul"
          display={{ xs: 'block' }}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            gap: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link style={{ textDecoration: 'none', height: '100%' }} href={'/'}>
            <Box
              component={'span'}
              sx={{
                color: fixed ? 'black' : 'primary.light',
                ...navLink,
              }}
            >
              Books
            </Box>
          </Link>
          <Link
            href="/favorites"
            style={{ textDecoration: 'none', height: '100%' }}
          >
            <Box
              component={'span'}
              sx={{
                color: fixed ? 'black' : 'primary.light',
                ...navLink,
              }}
            >
              Favorites
            </Box>
          </Link>
          <Link
            style={{ textDecoration: 'none', height: '100%' }}
            href={'/about'}
          >
            <Box
              component={'span'}
              sx={{
                color: fixed ? 'black' : 'primary.light',
                ...navLink,
              }}
            >
              About
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Header;
