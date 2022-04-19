import { MyContext } from 'core/context/myContext';
import React from 'react';
import { getEpisodesCollection } from './api';
import { EpisodesCollectionComponent } from './episodes-collection.component';

export const EpisodesCollectionContainer: React.FunctionComponent = () => {
  const [episodesCollection, setEpisodesCollection] = React.useState([]);
  const { page, setLastPage, setPage } = React.useContext(MyContext);

  React.useEffect(() => {
    getEpisodesCollection(page)
      .then((res) => {
        setEpisodesCollection(res);
      })
      .catch((error) => {
        console.log('última página');
        setLastPage(page - 1);
        setPage(page - 1);
      });
  }, [page]);

  return (
    <>
      <EpisodesCollectionComponent episodesCollection={episodesCollection} />
    </>
  );
};
