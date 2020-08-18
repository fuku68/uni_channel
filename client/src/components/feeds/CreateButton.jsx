import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

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
      startIcon={<CreateIcon/>}
      onClick={() => onClick()}
    >
      スレッドの作成
    </Button>
  )
}
export default CreateButton
