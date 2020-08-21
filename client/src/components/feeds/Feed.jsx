import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  open: {
    marginLeft: 'auto',
  },
  contet: {
  }
})

const Feed = ({
  feed,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          {feed.title}
        </Typography>
        <Typography variant="body1">
          {feed.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" className={classes.open} onClick={ () => { onClick(feed) }}>
          開く
        </Button>
      </CardActions>
    </Card>
  )
}

export default Feed
