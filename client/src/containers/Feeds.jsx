import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string';
import { Container } from '@material-ui/core';

import { feedsRequest } from '../store/feeds/actions'
import { tagsRequest } from '../store/tags/actions'

import FeedsComp from '../components/feeds/Feeds'

const Feeds = ({
  match,
}) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const store = useSelector(state => state.feeds)
  const tagsStore = useSelector(state => state.tags)

  useEffect(() => {
    const params = queryString.parse(location.search)
    dispatch(feedsRequest({
      university_id: match.params.university_id,
      page: params.page,
    }))

    // タグ一覧の取得
    dispatch(tagsRequest())
  }, [])

  console.log(tagsStore.tags)
  return (
    <Container fixed>
      <FeedsComp
        tags={tagsStore.tags}
      />
    </Container>
  )
}
export default Feeds
