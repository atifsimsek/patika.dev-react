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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

export const KeepMountedModal = ({ book }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const img = book?.volumeInfo?.imageLinks.thumbnail;
  const title = book?.volumeInfo?.title;
  const authors = book?.volumeInfo.authors;
  const description = book?.volumeInfo.description;
  const language = book?.volumeInfo.language;
  const previewLink = book?.volumeInfo.previewLink;

  return (
    <div>
      <Book book={book} open={open} setOpen={setOpen}></Book>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            aria-label="delete"
            size="large"
          >
            <CloseIcon />
          </IconButton>

          <Typography
            sx={{ textAlign: 'center' }}
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: 'auto 0',
            }}
          >
            <Image src={img} alt={title} width={250} height={300} />
            <Stack
              sx={{
                gap: 3,
                px: 5,
                height: 300,
                width: 600,
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
              }}
            >
              <hr style={{ width: '500px' }} />

              <Typography variant="body2" color="text.secondary">
                Author(s):
                <br />
                {/* {authors.join(', ')} */}
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
