import useStory from '../hooks/useStory'
import styled from 'styled-components'

type Props = {
  id: number
  index: number
}

const StoryContainer = styled.article`
  padding: 0.5rem;
`

const StoryTitle = styled.span`
  font-size: 1.25rem;
`

const InfoContainer = styled.div`
  display: flex;
  column-gap: 0.75rem;
`

function StoryController({ id, index }: Props) {
  const { story } = useStory(id)

  return (
    <StoryContainer>
      <span>{index + 1}. </span>
      <StoryTitle>{story?.title}</StoryTitle>
      <InfoContainer>
        <span>{story?.score} points</span>
        <span>by {story?.by}</span>
        <span>{story?.kids?.length ?? 0} comments</span>
      </InfoContainer>
    </StoryContainer>
  )
}

export default StoryController
