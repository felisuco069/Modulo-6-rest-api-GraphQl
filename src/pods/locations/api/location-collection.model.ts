export interface LocationApi {
  id: string;
  name: string;
  type: string;
}

export interface getLocationCollectionResponse {
  locations: {
    results: LocationApi[];
  };
}

export const createEmptyLocation = (): LocationApi[] => [
  {
    id: '',
    name: '',
    type: '',
  },
];
