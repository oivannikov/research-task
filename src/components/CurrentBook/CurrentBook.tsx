import React, { useEffect, useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { CurrentInfoBook } from '../CurrentInfoBook/CurrentInfoBook';

import { useParams } from 'react-router-dom';
import { getBookByid } from '../../api/books';

import { IBook } from '../../interfaces';

import './CurrentBook.scss';

export const CurrentBook: React.FC = () => {
  const [book, setBook] = useState<IBook>();
  const { bookId } = useParams<{ bookId: string }>();
  
  useEffect(() => {
    getBookByid(+bookId)
      .then(book => setBook(book));
  }, []);

  console.log(book);
  
  return (
    <div className="currentBook">
      { book?.name ? <CurrentInfoBook currentBook={book} /> : <CircularProgress /> }
    </div>
  );
}
