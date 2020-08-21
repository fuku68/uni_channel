import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PersonIcon from '@material-ui/icons/Person'
import { format } from 'date-fns'

const useStyles = makeStyles({
  withIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '6px 0px',
  },
  icon: {
    marginRight: '10px',
  }
})

const Feed = ({
  feed,
}) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          {feed.title}
        </Typography>
        <Typography variant="subtitle2" className={classes.withIconWrapper}>
          <LocalOfferIcon className={classes.icon}  />
          { (feed.tags || []).join(', ') }
        </Typography>
        <Typography variant="subtitle2" className={classes.withIconWrapper}>
          <ScheduleIcon className={classes.icon} />
          { feed.created_at && format(new Date(feed.created_at), 'yyyy/MM/dd HH:mm:ss') }
        </Typography>
        <Typography variant="subtitle2" className={classes.withIconWrapper}>
          <PersonIcon className={classes.icon} />
          {feed.name}
        </Typography>
        <Typography variant="body1">
          {feed.content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Feed
