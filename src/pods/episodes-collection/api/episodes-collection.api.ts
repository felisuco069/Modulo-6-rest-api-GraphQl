import { gql } from 'graphql-request';
import { grapfQlClient } from 'core/api/graphql.client';
import {
  EpisodesApi,
  getEpisodesCollectionResponse,
} from './episodes-collection.models';

const url = 'https://rickandmortyapi.com/api';

export const getEpisodesCollection = async (
  page: number
): Promise<EpisodesApi[]> => {
  const query = gql`
    query {
      episodes(page:${page}) {
        results{
          id
          name
          episode
          air_date
        }
      }
    }
  `;

  const { episodes } =
    await grapfQlClient.request<getEpisodesCollectionResponse>(query);

  return episodes.results;
};
