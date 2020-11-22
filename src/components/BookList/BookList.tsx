import React from 'react';

import { MediaBook } from '../MediaBook/MediaBook';

import { IBook } from '../../interfaces';

import  { images } from '../../api/images';

import './BookList.scss';
interface BookListProps {
  books: IBook[],
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="books">
    {
      books.map((book, index) => (
        <MediaBook book={book} images={images[index]} key={index} />
      ))
    }
    </div>
  );
}
