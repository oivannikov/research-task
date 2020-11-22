import React, { useState, useEffect } from 'react';

import { getCurrentCharacter } from '../../api/povCharacters';
import { ListCharacter } from '../ListCharacter/ListCharacter';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ICharacter } from '../../interfaces';

import './SideBarBook.scss';

type PovChars = {
  povCharacters: string[];
}

export const SideBarBook: React.FC<PovChars> = ({ povCharacters }) => {
  const [currentCharacters, setCurrentCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const requests = povCharacters.map(povCharacter => getCurrentCharacter(povCharacter));
    
    setIsLoading(true);
    Promise.all(requests)
      .then(characters => {
        setCurrentCharacters(characters);
        setIsLoading(false);
      });

  }, []);

  return (
    <div className="sidebar">
      { isLoading ? <CircularProgress /> : <ListCharacter characters={currentCharacters} /> }
    </div>
  );
}
