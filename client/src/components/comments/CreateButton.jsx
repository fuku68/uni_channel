import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import AddCommentIcon from '@material-ui/icons/AddComment'

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    borderRadius: '1.5em',
  }
}))

const CreateButton = ({
  onClick,
}) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      size="large"
      startIcon={<AddCommentIcon/>}
      onClick={() => onClick()}
    >
      コメントする
    </Button>
  )
}
export default CreateButton
