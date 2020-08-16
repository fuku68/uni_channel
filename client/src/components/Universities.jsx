import React, { useState } from 'react'
import { Grid, TextField, InputAdornment } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';

import University from './University'

const _ = require('lodash')

const Universities = ({
  universities,
  onSelect,
}) => {
  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    e.stopPropagation()
    setSearch(e.target.value)
  }

  const onSelectUniversity = (e, newValue) => {
    e.stopPropagation()
    setSearch(newValue)
  }

  const filteredUniversities = universities.filter(university => {
    if (!search) return true;
    return _.includes(university.name, search);
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Autocomplete
          freeSolo
          disableClearable
          options={ universities.map((option) => option.name) }
          onInputChange={onSelectUniversity}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              onChange={onChangeSearch}
              InputProps={{
                ...params.InputProps,
                type: 'search',
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      {  filteredUniversities.map((university, index) => {

        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <University university={university} onClick={ onSelect } />
          </Grid>
        )
      })}
    </Grid>
  )
}
export default Universities
