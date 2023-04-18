import { Box, InputLabel, MenuItem, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { store } from '@/store';
import { fetchBooks } from '@/store/services/bookService';
import { options, options2, options3 } from '@/utils/filterOptions';
import { useState, useEffect } from 'react';

const SideNav = () => {
  const [inputValues, setInputValues] = useState({
    search: '',
    filter: 'partial',
    printType: 'all',
    sortBy: 'relevance',
  });

  const handleChange = (event: any) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const getBooks = async () => {
    await store.dispatch(fetchBooks(inputValues));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValues.search === '') {
      alert('Please enter a valid book title.');
    } else {
      getBooks();
    }
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit}
      sx={{
        height: 530,
        p: 3,
        backgroundColor: 'primary.light',
        boxShadow: 3,
        display: 'flex',
        gap: 6,
        flexDirection: 'column',
        position: 'sticky',
        top: 70,
      }}
    >
      <TextField
        color="info"
        id="search"
        name="search"
        label="Search Book"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        onChange={handleChange}
        id="filter"
        name="filter"
        select
        label="Filter"
        defaultValue="partial"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        onChange={handleChange}
        id="printType"
        name="printType"
        select
        label="Print Type"
        defaultValue="all"
      >
        {options2.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        onChange={handleChange}
        id="sortBy"
        name="sortBy"
        select
        label="Sort By"
        defaultValue="relevance"
      >
        {options3.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <LoadingButton
        size="small"
        loading={false}
        loadingIndicator="Loading…"
        variant="outlined"
        type="submit"
      >
        <span>Search</span>
      </LoadingButton>
    </Box>
  );
};

export default SideNav;
