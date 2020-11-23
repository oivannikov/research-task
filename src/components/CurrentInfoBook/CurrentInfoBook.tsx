import React from 'react';

import { NavLink, useHistory } from 'react-router-dom';

import { SideBarBook } from '../SideBarBook/SideBarBook';

import { IBook } from '../../interfaces';

import './CurrentInfoBook.scss';
interface CurrentBookProps {
  currentBook: IBook,
}

export const CurrentInfoBook: React.FC<CurrentBookProps> = ({ currentBook }) => {
  const { name, country, authors, publisher, mediaType, povCharacters } = currentBook;
  const history = useHistory();

  return (
    <>
      <div className="info">
        <h3 className="info__name-book">
          { name }
        </h3>
  
        <div className="info__content">
          <h4>Summary</h4>
          <p className="info__summary-book">
            The Book in Three Sentences: The United States is engaging in a modern form of slavery by using the World Bank and other
            international organizations to offer huge loans to developing nations for construction projects and oil production.
            On the surface this appears to be generous, but the money is only awarded to a country if it agrees to hire US construction firms, 
            which ensures a select few people get rich. Furthermore, the loans are intentionally too big for any developing nation to repay and 
            this debt burden virtually guarantees the developing nation will support the political interests of the United States.
          </p>
        </div>

        <div className="info__footer-book">
          <div className="info__author">
            { authors }
          </div>

          <div className="info__company">
            <p className="info__country">Сountry: { country }</p>
            <span className="info__publisher">Publisher: { publisher }</span>
            <span className="info__type">Media Type: { mediaType }</span>
          </div>
        </div>
      </div>

      <SideBarBook povCharacters={povCharacters} />

      <button className="back-button" onClick={() => history.push("/")}>{'<'}</button>
    </>
  );
}
