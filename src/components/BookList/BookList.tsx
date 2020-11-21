import React from 'react';

import { MediaBook } from '../MediaBook/MediaBook';

import { IBook } from '../../interfaces';

import './BookList.scss';

interface BookListProps {
  books: IBook[],
}

const images: string[] = [
  "https://cdn.recyclemag.ru/main/e/e83f28ba5366ad6efd406e74f58ae8ca.jpeg",
  "https://u.livelib.ru/reader/Miss_Acacia/o/fci2pp1t/o-o.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESW6YleoK1wM0WbJc_-0i8b-a9df6LbvwSw&usqp=CAU",
  "https://www.molnet.ru/mos/image?objectId=722529&trim_x=590",
  "https://i.pinimg.com/originals/35/8d/0a/358d0a5416c575672e087c29069fdfbb.jpg",
  "https://retail-loyalty.org/upload/iblock/1d4/4eb7af6a50fa411c41ee2ee5fcda2098.jpg",
  "https://investgazeta.ua/images/easyblog_articles/3083/b2ap3_large_EF4AA2F5-44F2-42DC-87F6-C6BC210E8594_cx2_cy1_cw87_w1200_r1_s.jpg",
  "https://cdn.pixabay.com/photo/2016/08/24/03/26/book-1616087__340.jpg",
  "https://99px.ru/sstorage/53/2017/10/tmb_210143_5963.jpg",
  "https://99px.ru/sstorage/53/2018/06/tmb_231566_464290.jpg"
];

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
