import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from '@material-ui/core';
import { universitiesRequest } from '../store/universities/actions'

import UniversitiesComp from '../components/Universities'

const Universities = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const store = useSelector(state => state.universities)

  useEffect(() => {
    const result = dispatch(universitiesRequest())
  }, [])

  const onSelectUniversity = (university) => {
  }

  return (
    <Container fixed>
      <UniversitiesComp universities={store.universities} onSelect={onSelectUniversity} />
    </Container>
  )
}
export default Universities;