import { flexCenter } from '@/styles/commonStyle';
import { Box, Stack, Typography } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        boxShadow: 2,
        padding: 1,
        height: 100,
        backgroundColor: 'white',
        ...flexCenter,
      }}
    >
      <Stack sx={{ ...flexCenter, gap: 2 }}>
        <Stack flexDirection={'row'} sx={{ display: 'flex', gap: 2 }}>
          <GitHubIcon />
          <LinkedInIcon />
          <Instagram />
        </Stack>
        <Typography sx={{ fontSize: 12 }} component={'span'}>
          &copy; 2023 atifsimsek
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
