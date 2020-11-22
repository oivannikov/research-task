import React, { useState, useEffect } from 'react';

import { getCurrentCharacter } from '../../api/povCharacters';
import { ListCharacter } from '../ListCharacter/ListCharacter';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ICharacter } from '../../interfaces';

import './SideBarBook.scss';

type povChars = {
  povCharacters: string[];
}

export const SideBarBook: React.FC<povChars> = ({ povCharacters }) => {
  const [currentCharacters, setCurrentCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const requests = povCharacters.map(povCharacter => getCurrentCharacter(povCharacter));
    
    Promise.all(requests)
      .then(characters => setCurrentCharacters(characters));

  }, []);

  return (
    <div className="sidebar">
      { currentCharacters.length === 0 ? <CircularProgress /> : <ListCharacter characters={currentCharacters} /> }
    </div>
  );
}
