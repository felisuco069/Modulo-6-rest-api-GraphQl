import {
  CharacterApi,
  getCharacterCollectionResponse,
} from './character-collection.api-model';
import { gql } from 'graphql-request';
import { grapfQlClient } from 'core/api/graphql.client';

const url = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = async (
  page: number,
  filterName: string
): Promise<CharacterApi[]> => {
  const query = gql`
    query {
      characters(page: ${page},filter: { name: "${filterName}" } ) {
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
