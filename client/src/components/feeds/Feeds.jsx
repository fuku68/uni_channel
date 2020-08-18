import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

import CreateButton from './CreateButton'
import Form from './Form'

const _ = require('lodash')

const useStyles = makeStyles((theme: Theme) => createStyles({
  create: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  }
}))

const Feeds = ({
  tags,
}) => {
  const classes = useStyles()
  const [onCreate, setOnCreate] = useState(false);

  return (
    <div>
      <div className={classes.create}>
        <CreateButton onClick={() => console.log('click')}/>
      </div>
      <Form
        tagsList={tags}
      />
    </div>
  )
}
export default Feeds
