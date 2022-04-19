export interface EpisodesApi {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}

export interface getEpisodesCollectionResponse {
  episodes: {
    results: EpisodesApi[];
  };
}
