import { gql } from 'graphql-request';

import { grapfQlClient } from 'core/api/graphql.client';
import {
  getLocationCollectionResponse,
  LocationApi,
} from './location-collection.model';

const url = 'https://rickandmortyapi.com/api';

export const getLocationCollection = async (
  page: number
): Promise<LocationApi[]> => {
  const query = gql`
    query {
      locations(page: ${page}) {
        results {
          id
          name
          type
        }
      }
    }
  `;

  const { locations } =
    await grapfQlClient.request<getLocationCollectionResponse>(query);

  return locations.results;
};
