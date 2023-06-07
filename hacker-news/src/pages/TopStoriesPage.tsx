import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as StoryService from '../services/StoryService'
import StoryController from '../components/StoryController'
import useSWR from 'swr'

const ControllerContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`

function TopStoriesController() {
  const [stories, setStories] = useState<Array<number>>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    StoryService.getTopStories(page, 10).then((stories) => {
      setStories((prevStories) => {
        return [...prevStories, ...stories]
      })
    })
  }, [page])

  const handleMoreStories = () => {
    setPage(page + 1)
  }

  return (
    <ControllerContainer>
      <ul>
        {stories.map((value, index) => {
          return <StoryController key={value} id={value.toString()} index={index} />
        })}
      </ul>

      <span style={{ cursor: 'pointer' }} onClick={handleMoreStories}>
        Load more
      </span>
    </ControllerContainer>
  )
}

export default TopStoriesController
