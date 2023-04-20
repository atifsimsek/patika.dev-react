import { flexCenter } from '@/styles/commonStyle';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    //Footer Component
    <Box
      component={'footer'}
      sx={{
        boxShadow: 2,
        padding: 1,
        height: 100,
        backgroundColor: 'white',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        ...flexCenter,
      }}
    >
      <Stack sx={{ ...flexCenter, gap: 2 }}>
        <Stack flexDirection={'row'} sx={{ display: 'flex', gap: 2 }}>
          <IconButton
            target="_blank"
            href="https://github.com/atifsimsek"
            sx={{ color: 'black' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.linkedin.com/in/atifsimsek/"
            sx={{ color: 'black' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.instagram.com/atifsimsek/"
            sx={{ color: 'black' }}
          >
            <Instagram />
          </IconButton>
        </Stack>
        <Typography sx={{ fontSize: 12 }} component={'span'}>
          &copy; 2023 atifsimsek
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
