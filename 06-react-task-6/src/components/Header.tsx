import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import Image from 'next/image';
import { flexCenter, navLink } from '@/styles/commonStyle';
import { grey } from '@mui/material/colors';
import Link from 'next/link';

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
    window.addEventListener('scroll', headerFixed);
    return () => {
      window.removeEventListener('scroll', headerFixed);
    };
  }, []);
  return (
    <>
      <Box
        component="nav"
        sx={{
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
        }}
      >
        {/* LOGO */}
        <Link href={'/'}>
          <Box
            sx={{
              '&:hover': { backgroundColor: `${grey[100]}` },
              ...flexCenter,
              paddingY: '5px',
              transition: 'all 0.3s',
            }}
          >
            <Image src={logo} height={60} alt="logo" />
          </Box>
        </Link>
        <Typography
          sx={{
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
          }}
        >
          Book API
        </Typography>

        {/* Links */}
        <Box component="ul" sx={{ ...flexCenter, gap: 3 }}>
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
