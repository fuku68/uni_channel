import React from 'react'
import { useForm } from "react-hook-form"
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  Button,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'

import Header from './../Header'

const useStyles = makeStyles((theme: Theme) => createStyles({
  field: {
    width: '100%',
  },
  helper: {
    textAlign: 'right',
  },
  action: {
    textAlign: 'center',
  },
  actionButton: {
    width: '120px',
    margin: '0 10px 6px',
  },
}))

const Form = ({
  open,
  onCreate,
  onClose,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const { handleSubmit, watch, register, errors } = useForm()
  const watchFields = watch(['name', 'content']);

  const onSubmit = values => onCreate(values)

  return (
    <Dialog open={open} fullScreen={fullScreen} aria-labelledby="confirmation-dialog-title" >
      { fullScreen && (
        <>
          <Header />
          <Box m={5} />
        </>
      )}
      <DialogTitle>
        コメント投稿
      </DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className={ classes.field }
                name="name"
                label="名前"
                inputRef={
                  register({
                    required: "Required",
                    maxLength: 64,
                  })
                }
                error={ !!errors.name }
                FormHelperTextProps={{className: classes.helper}}
                helperText={`${(watchFields.name || '').length} / 64文字`}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                className={ classes.field }
                name="content"
                label="コメント"
                multiline
                rows={10}
                variant="outlined"
                inputRef={
                  register({
                    required: "Required",
                    maxLength: 1200,
                  })
                }
                error={ !!errors.content }
                FormHelperTextProps={{className: classes.helper}}
                helperText={`${(watchFields.content || '').length} / 1200文字`}
              />
            </Grid>
            {
              // action
            }
            <Grid item xs={12} className={ classes.action }>
              <Button className={classes.actionButton} variant="contained" onClick={ () => onClose() }>
                キャンセル
              </Button>
              <Button className={classes.actionButton} variant="contained" color="primary" onClick={ handleSubmit(onSubmit) }>
                送信
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export default Form
