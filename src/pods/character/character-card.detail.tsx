import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import * as api from './api';
import * as classes from './character.styles';

interface Props {
  character: api.Character;
}

export const CharacterDetail = (props: Props) => {
  const { character } = props;

  const characterProperties = Object.keys(character);

  return (
    <Grid container spacing={1}>
      <List>
        {characterProperties.map((prop, index) => {
          if (prop !== 'id' && prop !== 'image') {
            return (
              <ListItem key={index}>
                <ListItemText
                  secondary={`${prop}: `}
                  className={classes.item}
                />
                <ListItemText
                  secondary={
                    character[prop] === ''
                      ? 'Unknown'
                      : prop === 'origin' || prop === 'location'
                      ? `${character[prop].name}`
                      : `${character[prop]}`
                  }
                  className={classes.itemState}
                />
              </ListItem>
            );
          }
        })}
      </List>
    </Grid>
  );
};
