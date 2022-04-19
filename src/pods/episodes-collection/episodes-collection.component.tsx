import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { EpisodesApi } from './api/episodes-collection.models';
import * as classes from './episodes-collection.styles';

interface Props {
  episodesCollection: EpisodesApi[];
}

export const EpisodesCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodesCollection } = props;

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className={classes.title}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Episode</TableCell>

            <TableCell align="right">Air date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {episodesCollection.map((episode) => (
            <TableRow key={episode.id}>
              <TableCell component="th" scope="row">
                {episode.name}
              </TableCell>
              <TableCell align="right">{episode.episode}</TableCell>
              <TableCell align="right">{episode.air_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
