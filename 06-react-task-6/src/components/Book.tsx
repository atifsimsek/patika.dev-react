import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image';
import { flexCenter } from '@/styles/commonStyle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArticleIcon from '@mui/icons-material/Article';
import { BookType } from '@/types/BookType';

interface Props {
  book: BookType;
  open: boolean;
  handleOpen: (value: boolean) => void;
}

export default function Book({ book, open, handleOpen }: Props) {
  const title = book?.volumeInfo?.title;
  const img = book?.volumeInfo?.imageLinks.smallThumbnail;
  const authors = book?.volumeInfo?.authors;
  const previewLink = book?.volumeInfo.previewLink;

  return (
    <Card
      sx={{
        ...flexCenter,
        maxWidth: 345,
        flexDirection: 'column',
        boxShadow: 3,
      }}
    >
      {/* Card content */}
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 350,
          textAlign: 'center',
        }}
      >
        {/* Book cover image */}
        <Image src={img} height={200} width={150} alt={'resim'} />
        {/* Book title and author */}
        <CardContent sx={{ mr: 3 }}>
          <Typography
            sx={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
            gutterBottom
            variant="h6"
          >
            {title}
          </Typography>
          <hr />
          <Typography
            sx={{
              '&::-webkit-scrollbar': {
                backgroundColor: '',
                width: 0,
                height: 0,
              },
              overflow: 'scroll',
              height: 85,
            }}
            variant="body2"
            color="text.secondary"
          >
            {/* Book author */}
            Author(s):
            <br />
            {authors?.join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* Buttons */}
      <CardActions sx={{ gap: 3, py: 2 }}>
        {/* Preview button */}
        <Button
          target="_blank"
          component="a"
          size="small"
          href={previewLink}
          variant="contained"
          endIcon={<AutoStoriesIcon />}
        >
          Preview
        </Button>
        {/* Detail button */}
        <Button
          size="small"
          variant="contained"
          endIcon={<ArticleIcon />}
          onClick={() => {
            handleOpen(true);
          }}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}
