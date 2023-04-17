import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image';
import { flexCenter } from '@/styles/commonStyle';

export default function Book({ book, open, setOpen }: any) {
  const title = book?.volumeInfo?.title;
  const img = book?.volumeInfo?.imageLinks.smallThumbnail;
  const authors = ['elma', 'armut'];

  return (
    <Card
      sx={{
        maxWidth: 345,
        ...flexCenter,
        flexDirection: 'column',
        boxShadow: 3,
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 350,
          textAlign: 'center',
        }}
      >
        <Image src={img} height={200} width={150} alt={'resim'} />
        <CardContent sx={{ mr: 3 }}>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <hr />
          <Typography style={{ fontSize: '14px' }} variant="h6">
            Authors
          </Typography>
          {authors.map((author: any, i: any) => (
            <Typography
              sx={{ textAlign: 'center' }}
              key={i}
              variant="body2"
              color="text.secondary"
            >
              <span key={i}>
                {author}
                {i !== authors.length - 1 ? ', ' : ''}
              </span>
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
