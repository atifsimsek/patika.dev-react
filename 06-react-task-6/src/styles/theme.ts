import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#E3E1DE',
      light: '#fff',
    },
    secondary: {
      main: '#e0e0e0',
    },
  },
});

export default theme;
