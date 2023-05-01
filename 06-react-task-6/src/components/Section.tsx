import { Box, Grid, Typography } from '@mui/material';
import SideNav from './SideNav';
import { useAppSelector } from '@/store/hooks';
import { KeepMountedModal as Modal } from './Modal';
import Skeleton from './Skeleton';
import { BookType } from '@/types/BookType';

const Section = () => {
  // Get books and loading state from Redux store
  const books = useAppSelector((store) => store.books.books);
  const loading = useAppSelector((store) => store.books.isLoading);

  // Styling for the book section
  const section = {
    '&::-webkit-scrollbar': {
      backgroundColor: '',
      width: 10,
      height: 10,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(73, 65, 65, 0.1)',
      borderRadius: 16,
    },
    minHeight: '75vh',
    overflow: 'scroll',
    flexWrap: 'wrap',
    justifyContent: 'center',
    p: 1,
    mb: { xs: 11, sm: 6 },
  };

  const box = {
    p: { xs: 0, sm: 5 },
    // marginBottom: { xs: -1, sm: -6.3 },
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'secondary.main',
  };

  return (
    <Box
      sx={{
        ...box,
      }}
    >
      <SideNav />
      {books?.items?.length === undefined ? (
        <Typography
          sx={{
            fontSize: { xs: 16, sm: '35px' },
            position: 'absolute',
            mt: 5,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
          variant="h3"
        >
          Please search for a book
        </Typography>
      ) : (
        <Grid sx={{ ...section, maxHeight: '85vh' }} container gap={5}>
          {/* Check loading */}
          {loading
            ? Array.from({ length: 10 }).map((_, index: number) => (
                <Skeleton key={index} />
              ))
            : books?.items?.length > 0 &&
              books?.items.map((book: BookType, index: number) => (
                <Modal book={book} key={index} />
              ))}
        </Grid>
      )}
    </Box>
  );
};

export default Section;
