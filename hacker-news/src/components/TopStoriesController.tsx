import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as StoryService from '../services/StoryService'
import StoryController from './StoryController'

const ControllerContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`

function TopStoriesController() {
  const [stories, setStories] = useState<Array<number>>([])

  useEffect(() => {
    StoryService.getTopStories(1, 10).then((stories) => {
      setStories(stories)
    })
  }, [])

  return (
    <ControllerContainer>
      <ul>
        {stories.map((value, index) => {
          return <StoryController key={value} id={value} index={index} />
        })}
      </ul>
    </ControllerContainer>
  )
}

export default TopStoriesController
