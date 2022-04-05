import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams();
  const navigate = useNavigate();

  const handleLoadCharacter = (id: string) => {
    api.getCharacter(id).then((character) => {
      setCharacter(mapCharacterFromApiToVm(character));
    });
  };

  React.useEffect(() => {
    handleLoadCharacter(id);
  }, []);

  return <CharacterComponent character={character} />;
};
