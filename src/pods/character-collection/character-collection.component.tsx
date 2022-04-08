import * as React from 'react';

import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { CharacterApi } from './api';

interface Props {
  characterCollection: CharacterApi[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
