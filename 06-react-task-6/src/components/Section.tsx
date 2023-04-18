'use client';
import { Box, Grid } from '@mui/material';
import Book from './Book';
import SideNav from './SideNav';
import { useEffect } from 'react';
import { store } from '@/store';
import { fetchBooks } from '@/store/services/bookService';
import { useAppSelector } from '@/store/hooks';
import { KeepMountedModal as Modal } from './Modal';
import Skeleton from './Skeleton';

const Section = () => {
  const books = useAppSelector((store) => store.books.books);
  const loading = useAppSelector((store) => store.books.isLoading);
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
            backgroundColor: 'transparent',
            width: 10,
            height: 10,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(73, 65, 65, 0.1)',
            borderRadius: 16,
          },
          maxHeight: 530,
          overflow: 'scroll',
          flexWrap: 'wrap',
          justifyContent: 'center',
          p: 1,
        }}
        container
        gap={5}
      >
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : books?.items?.length > 0 &&
            books?.items.map((book: any, index: number) => (
              <Modal book={book} key={index} />
            ))}
      </Grid>
    </Box>
  );
};

export default Section;
