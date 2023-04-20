import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Book from './Book';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { BookType } from '@/types/BookType';

interface Props {
  book: BookType;
}

export const KeepMountedModal = ({ book }: Props) => {
  // Use useState hook to manage state of modal
  const [open, setOpen] = React.useState(false);

  // Function to handle opening modal
  const handleOpen = () => setOpen(true);

  // Function to handle closing modal
  const handleClose = () => setOpen(false);

  // Extract relevant book information from book prop
  const img = book?.volumeInfo?.imageLinks?.thumbnail;
  const title = book?.volumeInfo?.title;
  const authors = book?.volumeInfo?.authors;
  const description = book?.volumeInfo?.description;
  const language = book?.volumeInfo?.language;
  const previewLink = book?.volumeInfo?.previewLink;

  // Style for modal
  const style = {
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 10,
      height: 10,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(73, 65, 65, 0.1)',
      borderRadius: 16,
    },
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: { xs: 0, md: 4 },
    py: { xs: 3, md: 0 },
    display: 'flex',
    flexDirection: 'column',
  };

  // Style for detail

  const detail = {
    gap: 3,
    px: 5,
    height: 300,

    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 10,
      height: 10,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(73, 65, 65, 0.1)',
      borderRadius: 16,
    },
  };

  return (
    <div>
      <Book book={book} open={open} handleOpen={handleOpen}></Book>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style, overflow: { xs: 'scroll', md: 'unset' } }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: { xs: -1, sm: 10 },
              right: { xs: -1, sm: 10 },
            }}
            aria-label="delete"
            size="large"
          >
            <CloseIcon />
          </IconButton>

          <Typography
            sx={{ textAlign: 'center', p: { xs: 1, md: 3 } }}
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 0 },
              justifyContent: 'space-around',
              alignItems: { xs: 'center', md: 'normal' },
              margin: 'auto 0',
            }}
          >
            <Image
              className="bookImage"
              src={img}
              alt={title}
              width={250}
              height={300}
            />
            <Stack sx={{ ...detail, width: '100%' }}>
              <hr style={{ width: '100%' }} />

              <Typography variant="body2" color="text.secondary">
                Author(s):
                <br />
                {authors?.join(', ')}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Language:
                <br />
                {language.toUpperCase()}
              </Typography>

              <Typography
                style={{ fontSize: '14px', textAlign: 'justify' }}
                variant="h6"
              >
                Description:
                <br />
                {description}
              </Typography>
            </Stack>
          </Box>

          <Button
            sx={{
              margin: 'auto',
              paddingY: 2,
            }}
            target="_blank"
            component="a"
            href={previewLink}
            variant="contained"
            endIcon={<AutoStoriesIcon />}
          >
            Preview
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
