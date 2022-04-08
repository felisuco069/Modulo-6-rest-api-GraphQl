import {
  CharacterApi,
  getCharacterCollectionResponse,
} from './character-collection.api-model';
import { gql } from 'graphql-request';
import { grapfQlClient } from 'core/api/graphql.client';

const url = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = async (): Promise<CharacterApi[]> => {
  const query = gql`
    query {
      characters {
        results {
          id
          image
          name
          status
          origin {
            name
          }
        }
      }
    }
  `;

  const { characters } =
    await grapfQlClient.request<getCharacterCollectionResponse>(query);

  return characters.results;
};
