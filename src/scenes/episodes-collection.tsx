import * as React from 'react';
import { AppLayout } from 'layouts';
import { EpisodesCollectionContainer } from 'pods/episodes-collection';

export const EpisodesCollectionScene: React.FC = () => (
  <AppLayout>
    <EpisodesCollectionContainer />
  </AppLayout>
);
