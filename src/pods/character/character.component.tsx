import React from 'react';

import { Character } from './character.vm';
import * as classes from './character.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CharacterDetail } from './character-card.detail';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="600"
        image={character.image}
        title={character.name}
        className={classes.cardMedia}
      />
      <div className={classes.datasContainer}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Character Detail:
          </Typography>
        </CardContent>

        <CharacterDetail character={character} />
      </div>
    </Card>
  );
};
