import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core'

import { feedsRequest, feedPostResuest } from '../store/feeds/actions'
import { tagsRequest } from '../store/tags/actions'

import FeedsComp from '../components/feeds/Feeds'

const Feeds = ({
  match,
}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const store = useSelector(state => state.feeds)
  const tagsStore = useSelector(state => state.tags)

  const [universityId, setUniversityId] = useState(null)

  useEffect(() => {
    const { university_id, page } = match.params
    setUniversityId(university_id)

    dispatch(feedsRequest({
      universityId: university_id,
      page,
    }))

    // タグ一覧の取得
    dispatch(tagsRequest())
  }, [])

  const onCreate = (params) => {
    // Create feed
     dispatch(feedPostResuest({
       ...params,
       universityId,
     }))
  }

  // スレッドの詳細表示
  const onShowFeed = (feed) => {
    history.push(`/universities/${universityId}/feeds/${feed.id}/comments`)
  }

  return (
    <Container fixed>
      <FeedsComp
        feeds={store.feeds}
        tags={tagsStore.tags}
        onCreate={onCreate}
        onShowFeed={onShowFeed}
      />
    </Container>
  )
}
export default Feeds
