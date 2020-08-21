import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({
  bar: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
}))

const Header = () => {
  const history = useHistory()
  const classes = useStyles()

  const goHome = () => {
    history.push('/')
  }

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <Typography variant="h6" onClick={() => { goHome() }}>
          UNIちゃんねる
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header
