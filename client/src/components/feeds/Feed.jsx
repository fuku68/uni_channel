import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PersonIcon from '@material-ui/icons/Person'
import { format } from 'date-fns'

const useStyles = makeStyles({
  open: {
    marginLeft: 'auto',
  },
  withIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '6px 0px',
  },
  icon: {
    marginRight: '10px',
  },
  content: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxHeight: '1.4 * 3',
    lineHeight: '1.4',
    '&::after': {
      content: "...",
      position: 'absolute',
      top: '73px',
      left: '80px',
      backgroundColor: '#C0C0C0',
    }
  },
})

const Feed = ({
  feed,
  onClick,
}) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          {feed.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.withIconWrapper}>
          <LocalOfferIcon className={classes.icon} />
          { (feed.tags || []).join(', ') }
        </Typography>
        <Typography variant="subtitle2" className={classes.withIconWrapper}>
          <ScheduleIcon className={classes.icon} />
          { feed.created_at && format(new Date(feed.created_at), 'yyyy/MM/dd HH:mm:ss') }
        </Typography>
        <Typography variant="subtitle2" className={classes.withIconWrapper} >
          <PersonIcon className={classes.icon} />
          {feed.name}
        </Typography>
        <Typography variant="body1" component="pre" className={classes.content}>
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
