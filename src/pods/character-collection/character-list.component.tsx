import * as React from 'react';

import * as classes from './character-collection.styles';
import { CharacterApi } from './api';
import { useNavigate } from 'react-router-dom';
import { MyContext } from 'core/context/myContext';

interface Props {
  characterCollection: CharacterApi[];
}

export const CharacterListComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  const { setIsViewPage } = React.useContext(MyContext);
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/characters/${id}`);
    setIsViewPage(false);
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li
            className={classes.link}
            key={character.id}
            onClick={() => handleClick(character.id)}
          >
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
