import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core'

import { commentsRequest, commentPostRequest } from '../store/comments/actions'

import CommentsComp from '../components/comments/Comments'

const Comments =({
  match,
}) => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.comments)

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

  // create comment
  const onCreate = (params) => {
    // Create feed
     dispatch(commentPostRequest({
       ...params,
       universityId: state.universityId,
       feedId: state.feedId,
     }))
  }

  // delete comment
  const onDelete = (params) => {
  }

  return (
    <Container fixed>
      <CommentsComp
        university={store.university}
        feed={store.feed}
        comments={store.comments}
        onCreate={onCreate}
      />
    </Container>
  )
}
export default Comments
