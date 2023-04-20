import {
  Box,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { flexCenter } from '@/styles/commonStyle';
import CheckIcon from '@mui/icons-material/Check';

const page = () => {
  const about = {
    zIndex: 50,
    background: 'white',
    padding: 5,
    boxShadow: 2,
    borderRadius: 2,
    px: 4,
    py: 4,
  };

  const image = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: 0,
    filter: 'blur(3px)',
  };

  return (
    <Box
      component="section"
      sx={{
        ...flexCenter,
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Box
        className="aboutImage"
        sx={{
          ...image,
        }}
      />
      <Stack
        sx={{
          ...about,
        }}
      >
        <Typography variant="h1" fontSize={'16px'}>
          Book search application
        </Typography>
        <Typography variant="h2">Technologies</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <Typography>Next.js 13</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <Typography>Axios</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <Typography>Material UI / Material Icons</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <Typography>React Slick</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <Typography>Redux Toolkit</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <Typography>Redux Thunk</Typography>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default page;
