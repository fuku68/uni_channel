import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  Chip,
  Button,
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
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

const _ = require('lodash')

const Form = ({
  open,
  tagsList,
  onCreate,
  onClose,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [tag, setTag] = useState([])
  const [tags, setTags] = useState([])
  const { handleSubmit, watch, register, errors, control } = useForm()
  const watchFields = watch(['name', 'title', 'content']);

  const onSubmit = values => onCreate(values)

  return (
    <Dialog open={open} fullScreen={fullScreen}
      aria-labelledby="confirmation-dialog-title"
    >
      { fullScreen && (
        <>
          <Header />
          <Box m={5} />
        </>
      )}
      <DialogTitle>
        スレッドの作成
      </DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className={ classes.field }
                name="name"
                label="名前"
                maxLength="64"
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
                name='title'
                label="タイトル"
                maxLength="64"
                inputRef={
                  register({
                    required: "Required",
                    maxLength: 64,
                  })
                }
                error={ !!errors.title }
                FormHelperTextProps={{className: classes.helper}}
                helperText={`${(watchFields.title || '').length} / 64文字`}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="tags"
                defaultValue={[]}
                render={({ onChange, onBlur, value}) => (
                  <Autocomplete
                    freeSolo
                    multiple
                    value={tags}
                    onChange={(event, newValue) => {
                      if (value.length < 3) {
                        setTags(newValue)
                        onChange(newValue)
                      }
                    }}
                    name='tags'
                    options={tagsList}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="タグ"
                        value={tag}
                        onChange={(event) => {
                          setTag(event.target.value)
                        }}
                        onBlur={(e) => {
                          const val = e.target.value
                          if (value.length >= 3) {
                            setTags([...tags])
                          } else if (val) {
                            if (_.includes(tags, val)) {
                              setTags([...tags])
                            } else {
                              setTags([...tags, val])
                            }
                          }
                        }}
                        FormHelperTextProps={{className: classes.helper}}
                        helperText={`${value.length} / 3つ`}
                      />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={ classes.field }
                name='content'
                label="内容"
                multiline
                rows={8}
                variant="outlined"
                inputRef={
                  register({
                    required: "Required",
                    maxLength: 64,
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
