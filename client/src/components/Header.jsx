import React, { useState } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  bar: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <Typography variant="h6">
          UNIちゃんねる
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header
