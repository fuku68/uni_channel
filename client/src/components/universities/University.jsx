import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent } from '@material-ui/core'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'

const useStyles = makeStyles({
  content: {
    "&:last-child": { paddingBottom: '16px' },
  },
  text: {
    display: 'flex',
    lineHeight: '1.5em',
    verticalAlign: 'middle',
  },
  icon: {
    marginRight: '9px',
  }
})

const University = ({
  university,
  onClick
}) => {
  const classes = useStyles()

  return (
    <Card onClick={ () => onClick(university) }>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.text}>
          <LocalLibraryIcon className={classes.icon} />
          { university.name }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default University
