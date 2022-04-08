import * as React from 'react';
import { CharacterApi, getCharacterCollection } from './api';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterApi[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result: CharacterApi[]) => {
      setCharacterCollection(result);
    });
  };
  return { characterCollection, loadCharacterCollection };
};
