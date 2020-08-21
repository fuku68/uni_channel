import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core';

const Comments =({
  match,
}) => {
  const dispatch = useDispatch()
  const comment = useSelector(state => state.comments)

  const [state, setState] = useState({
    universityId: null,
    feedId: null,
  })

  useEffect(() => {
    const { university_id, feed_id} = match.params
    setState({
      universityId: university_id,
      feedId: feed_id,
    })
  }, [])

  return (
    <div>
    </div>
  )
}
export default Comments
