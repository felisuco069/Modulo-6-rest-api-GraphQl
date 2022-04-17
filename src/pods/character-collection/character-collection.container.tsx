import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom';

import * as classes from './character-collection.styles';
import { MyContext } from 'core/context/myContext';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();

  const { page, setPage } = React.useContext(MyContext);
  const [searched, setSearched] = React.useState('');

  const handleChange = (event, value) => {
    setPage(value);
  };

  React.useEffect(() => {
    loadCharacterCollection(page, searched);
  }, [page, searched]);

  return (
    <>
      <div>
        <Typography>Page: {page}</Typography>
        <Pagination count={42} page={page} onChange={handleChange} />
      </div>
      <div className={classes.search}>
        <TextField
          id="filled-search"
          value={searched}
          label="Search Character"
          type="search"
          variant="filled"
          onChange={(e) => setSearched(e.target.value)}
        />
      </div>
      <CharacterCollectionComponent characterCollection={characterCollection} />
    </>
  );
};
