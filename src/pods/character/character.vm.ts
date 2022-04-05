export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  bestSentences?: string[];
}

export const createEmptyCharacter = (): Character => {
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
