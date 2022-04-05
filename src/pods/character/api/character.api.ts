import { Character } from './character.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacter = (id: string): Promise<Character> => {
  return Axios.get(`${url}/${id}`).then((response) => response.data);
};
