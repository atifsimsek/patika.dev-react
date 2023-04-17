import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Book from './Book';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import { flexCenter } from '@/styles/commonStyle';

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
};

export const KeepMountedModal = ({ book }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const img = book?.volumeInfo?.imageLinks.thumbnail;
  const title = book?.volumeInfo?.title;
  const authors = book?.volumeInfo.authors;
  const description = book?.volumeInfo.description;

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
        <Box sx={style}>
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
              alignContent: 'flex-end',
              height: '500px',
            }}
          >
            <Image src={img} alt={title} width={250} height={300} />
            <Stack
              sx={{
                textAlign: 'center',
                p: 3,
                gap: 3,
                alignSelf: 'flex-start',
              }}
            >
              <hr style={{ width: '500px' }} />
              {authors.map((author: any, i: any) => (
                <Typography key={i} variant="body2" color="text.secondary">
                  <span key={i}>
                    {author}
                    {i !== authors.length - 1 ? ', ' : ''}
                  </span>
                </Typography>
              ))}
              <Typography
                style={{ fontSize: '14px', textAlign: 'justify' }}
                variant="h6"
              >
                {description}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
