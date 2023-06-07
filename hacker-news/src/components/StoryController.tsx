import useStory from '../hooks/useStory'
import styled from 'styled-components'
import { Link } from 'wouter'
import StoryLoader from './StoryLoader'

type Props = {
  id: string
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

const LinkSpan = styled.span`
  cursor: pointer;
  color: gray;

  &:hover {
    text-decoration: underline;
  }
`

function StoryController({ id, index }: Props) {
  const { story, isLoading } = useStory(id)

  if (isLoading) return <StoryLoader />

  return (
    <StoryContainer>
      <span>{index + 1}. </span>
      <StoryTitle>{story?.title}</StoryTitle>
      <InfoContainer>
        <span>{story?.score} points</span>
        <span>by {story?.by}</span>
        <Link href={`/comments/${id}`}>
          <LinkSpan>{story?.kids?.length ?? 0} comments</LinkSpan>
        </Link>
      </InfoContainer>
    </StoryContainer>
  )
}

export default StoryController
