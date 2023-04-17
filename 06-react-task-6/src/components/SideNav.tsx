import { Box, InputLabel, MenuItem, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { store } from '@/store';
import { fetchBooks } from '@/store/services/bookService';

const SideNav = () => {
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Box
      component={'form'}
      sx={{
        height: 530,
        p: 3,
        backgroundColor: 'primary.light',
        boxShadow: 3,
        display: 'flex',
        gap: 3,
        flexDirection: 'column',
        position: 'sticky',
        top: 70,
      }}
    >
      <TextField
        color="info"
        id="outlined-basic"
        label="Search Book"
        variant="outlined"
      />
      <TextField
        id="filter"
        select
        label="Filter"
        defaultValue="EUR"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="filterType"
        select
        label="Filter Type"
        defaultValue="EUR"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="SortBy"
        select
        label="Sort By"
        defaultValue="EUR"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
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
      >
        <span>Search</span>
      </LoadingButton>
    </Box>
  );
};

export default SideNav;
