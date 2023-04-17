'use client';
import { Box, Grid } from '@mui/material';
import Book from './Book';
import SideNav from './SideNav';
import { useEffect } from 'react';
import { store } from '@/store';
import { fetchBooks } from '@/store/services/bookService';
import { useAppSelector } from '@/store/hooks';
import { KeepMountedModal as Modal } from './Modal';

const Section = () => {
  const getBooks = async () => {
    await store.dispatch(fetchBooks());
  };
  useEffect(() => {
    getBooks();
  }, []);

  const books = useAppSelector((store) => store.books.books);

  console.log(books);
  return (
    <Box
      sx={{
        p: 5,
        gap: 5,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <SideNav />
      <Grid
        sx={{
          '&::-webkit-scrollbar': {
            backgroundColor: '',
            width: 0,
            height: 0,
          },
          maxHeight: 530,
          overflow: 'scroll',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        container
        gap={5}
      >
        {books?.items?.length > 0 &&
          books?.items.map((book: any, index: number) => (
            <Modal book={book} key={index} />
          ))}
      </Grid>
    </Box>
  );
};

export default Section;
