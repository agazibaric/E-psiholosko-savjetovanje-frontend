import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from 'app/components';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
  },
  media: {
    height: 240,
  },
});

export interface CategoryCardProps {
  group: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ group }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + group.category.image}
          title="Select service"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {group.category.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { CategoryCard };
