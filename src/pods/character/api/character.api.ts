import { Character, getCharacterResponse } from './character.api-model';
import { gql } from 'graphql-request';
import { grapfQlClient } from 'core/api/graphql.client';

const url = 'https://rickandmortyapi.com/graphql';

export const getCharacterById = async (id: string): Promise<Character> => {
  const query = gql`
    query  {
      charactersByIds(ids: "${id}") {
      id
      name
      image
      status
      species
      gender
      origin{
        name
      }
      location{
         name
      }
      type
      }
    }`;

  const { charactersByIds } = await grapfQlClient.request<getCharacterResponse>(
    query
  );
  return charactersByIds[0];
};
