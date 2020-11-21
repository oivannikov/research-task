import React from 'react';

import { NavLink } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { IBook } from '../../interfaces';

import './MediaBook.scss';

interface BookProps {
  book: IBook,
  images: string,
}

export const MediaBook: React.FC<BookProps> = ({ book, images }) => {
  return (
    <>
      <Card className="book">
        <Typography className="book__author" component="p">
          {book.authors[0]}
        </Typography>

        <CardActionArea>
          <CardMedia
            className="book__media"
            image={images}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography className="book__name" gutterBottom variant="h5" component="h2">
              {book.name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Books form a worldview - by reading the right books, a person forms a worldview, expands and deepens his view of the world.
            </Typography>
          </CardContent>

        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="body2" color="textSecondary" component="span">
            {book.numberOfPages}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}
