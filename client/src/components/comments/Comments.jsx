import React, { useState } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import Header from './../Header'
import Feed from './Feed'
import Comment from './Comment'
import CreateButton from './CreateButton'
import Form from './Form'

import EmptyImage from '../../asset/empty2.png'

const useStyles = makeStyles((theme: Theme) => createStyles({
  empty: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  emptyImageWrapper: {
    textAlign: 'center',
  },
  emptyImage: {
    maxWidth: '200px',
  },
  emptyMessageWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    }
  },
  create: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  },
}))

const Comments = ({
  university,
  feed,
  comments,
  onCreate,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const reenderEmpty = () => (
    <>
      <Grid container className={classes.empty}>
        <Grid item xs={12} sm={6} className={classes.emptyImageWrapper}>
          <img src={EmptyImage} className={classes.emptyImage} alt="コメントはありません"/>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.emptyMessageWrapper}>
          <Typography variant="h6" component="h3">
            コメントはありません<br />
          </Typography>
        </Grid>
      </Grid>
      <Box m={3} />
    </>
  )

  return (
    <>
      <Header />
      <Box m={10} />

      { // スレッド
      }
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Typography variant="h5" component="h2">
            スレッド
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <Feed feed={feed} />
        </Grid>


        <Grid item xs={12} >
          <Typography variant="h5" component="h2">
            コメント一覧
          </Typography>
        </Grid>

        { comments.length === 0 && reenderEmpty() }
        { comments.map((comment, index) => (
          <Grid item xs={12} key={index}>
            <Comment comment={comment} />
          </Grid>
        ))}

      </Grid>

      <div className={classes.create}>
        <CreateButton onClick={() => setOpen(true)} />
      </div>
      <Form
        open={open}
        onCreate={onCreate}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default Comments
