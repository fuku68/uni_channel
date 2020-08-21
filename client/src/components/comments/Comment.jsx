import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Card,
  CardContent,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import ScheduleIcon from '@material-ui/icons/Schedule'
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

const Comment = ({
  comment,
}) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent>
        <Typography variant="body1" className={classes.withIconWrapper}>
          <PersonIcon className={classes.icon} />
          { comment.name }
        </Typography>
        <Typography variant="subtitle2" className={classes.withIconWrapper}>
          <ScheduleIcon className={classes.icon} />
          { comment.created_at && format(new Date(comment.created_at), 'yyyy/MM/dd HH:mm:ss') }
        </Typography>
        <Typography variant="body1">
          {comment.content}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default Comment
