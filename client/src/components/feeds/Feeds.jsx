import React, { useState } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Header from './../Header'
import Feed from './Feed'
import CreateButton from './CreateButton'
import Form from './Form'

import EmptyImage from '../../asset/empty.png'

const useStyles = makeStyles((theme: Theme) => createStyles({
  empty: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  emptySpace: {
    [theme.breakpoints.up('sm')]: {
      margin: '32px',
    }
  },
  emptyImageWrapper: {
    textAlign: 'center',
  },
  emptyImage: {
    maxWidth: '100%'
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

const Feeds = ({
  feeds,
  tags,
  onCreate,
  onShowFeed,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const reenderEmpty = () => (
    <>
      <Box m={1} className={classes.emptySpace}/>
      <Grid container className={classes.empty}>
        <Grid item xs={12} sm={6} className={classes.emptyImageWrapper}>
          <img src={EmptyImage} className={classes.emptyImage} alt="スレッドはありません"/>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.emptyMessageWrapper}>
          <Typography variant="h6" component="h3">
            投稿スレッドはありません<br />
            スレッドを作成しましょう
          </Typography>
        </Grid>
      </Grid>
    </>
  )

  return (
    <div>
      <Header />
      <Box m={10} />
      { // スレッドの一覧
      }
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h5" component="h2">
            スレッドの一覧
          </Typography>
        </Grid>

        { // スレッドがない場合
          feeds.length === 0 && reenderEmpty() }

        { feeds.map((feed, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Feed feed={feed} onClick={onShowFeed} />
          </Grid>
        ))}
      </Grid>

      <div className={classes.create}>
        <CreateButton onClick={() => setOpen(true)} />
      </div>
      <Form
        open={open}
        tagsList={tags}
        onCreate={onCreate}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
export default Feeds
