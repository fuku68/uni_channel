import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core';

import { commentsRequest, commentPostRequest } from '../store/comments/actions'

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
    const { university_id, feed_id, page } = match.params
    setState({
      universityId: university_id,
      feedId: feed_id,
    })

    dispatch(commentsRequest({
      universityId: university_id,
      feedId: feed_id,
      page,
    }))
  }, [])

  return (
    <div>
    </div>
  )
}
export default Comments
