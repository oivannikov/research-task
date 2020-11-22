import React from 'react';

import './ListCharacter.scss';

import { ICharacter } from '../../interfaces';
interface CharactersProps {
  characters: ICharacter[],
}

export const ListCharacter: React.FC<CharactersProps> = ({ characters }) => {
  if (characters.length === 0) {
    return <h4>No characters</h4>
  }

  return (
    <>
      <h4 className="sidebar__heading">Characters</h4>

      <ul className="characters">
      {
        characters.map((character, index) => (
          <li className="character" key={index}>{ character.name }</li>
        ))
      }
      </ul>
    </>
  );
}
