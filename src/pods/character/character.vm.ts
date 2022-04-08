import * as api from './api';

export const createEmptyCharacter = (): api.Character => {
  return {
    id: '',
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
    },
    location: {
      name: '',
    },
    image: '',
  };
};
