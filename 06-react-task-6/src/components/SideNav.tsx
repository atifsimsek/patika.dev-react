import { Box, MenuItem, TextField, IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { store } from '@/store';
import { fetchBooks } from '@/store/services/bookService';
import { options, options2, options3 } from '@/utils/filterOptions';
import { useState } from 'react';
import { InputValues } from '@/types/InputValues';
import { useAppSelector } from '@/store/hooks';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const SideNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Initialize state for the form inputs
  const [inputValues, setInputValues] = useState<InputValues>({
    search: '',
    filter: 'partial',
    printType: 'all',
    sortBy: 'relevance',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  // Dispatch the fetchBooks action to get books from the API
  const getBooks = async () => {
    await store.dispatch(fetchBooks(inputValues));
  };

  // Handle form submission
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputValues.search === '') {
      alert('Please enter a valid book title.');
    } else {
      getBooks();
    }
  };

  // Get loading state from the Redux store
  const loading = useAppSelector((store) => store.books.isLoading);

  // Style for the form container
  const form = {
    transform: {
      xs: open ? 'translateX(-250px)' : 'translateX(-40px)',
      sm: open ? 'translateX(-300px)' : 'translateX(-40px)',
      md: 'translateX(0px)',
    },
    height: 530,
    width: { xs: 200, sm: 250 },
    transition: 'all 1s',
    p: 3,
    backgroundColor: 'primary.light',
    boxShadow: 3,
    display: 'flex',
    gap: 6,
    flexDirection: 'column',
    position: { xs: 'absolute', md: 'sticky' },
    top: { xs: 10, sm: -20 },
    left: { xs: 30, sm: 0 },
    zIndex: 20,
  };

  const icon = {
    display: { xs: 'flex', sm: 'flex', md: 'none' },
    color: 'black',
    zIndex: 30,
    position: 'absolute',
    top: { xs: -10, sm: -40 },
    left: { xs: 10, sm: -30 },
    background: 'white',
  };
  return (
    // Form container

    <Box component={'div'} sx={{ position: 'relative', mt: { xs: 2, sm: 0 } }}>
      <IconButton
        size="small"
        sx={{ ...icon }}
        onClick={() => {
          setOpen(!open);
        }}
        aria-label="delete"
      >
        {open ? <MenuIcon /> : <MenuOpenIcon />}
      </IconButton>

      <Box component={'form'} onSubmit={handleSubmit} sx={{ ...form }}>
        {/* Search input */}
        <TextField
          color="info"
          id="search"
          name="search"
          label="Search Book"
          variant="outlined"
          onChange={handleChange}
        />

        {/* Filter select */}
        <TextField
          onChange={handleChange}
          color="info"
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

        {/* Print type select */}
        <TextField
          onChange={handleChange}
          color="info"
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

        {/* Sort by select */}
        <TextField
          onChange={handleChange}
          color="info"
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

        {/* Search button */}
        <LoadingButton
          color="info"
          size="small"
          loading={loading ? true : false}
          variant="contained"
          type="submit"
        >
          <span>Search</span>
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default SideNav;
