import useComments from '../hooks/useComments'
import useStory from '../hooks/useStory'
import styled from 'styled-components'
import StoryLoader from '../components/StoryLoader'

type Props = {
  params: { id: string }
}

function CommentsPage({ params }: Props) {
  const { story, error, isLoading } = useStory(params.id)

  if (isLoading || error) return <StoryLoader />

  const ids = story?.kids.splice(0, 10).map((id) => id.toString()) ?? []

  return (
    <div>
      <header>Comments Section</header>
      <section>
        <CommentListController ids={ids} />
      </section>
    </div>
  )
}

function CommentListController({ ids }: { ids: Array<string> }) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {ids.map((id) => {
        return <li key={id}>{<CommentController id={id} />}</li>
      })}
    </ul>
  )
}

const TextContainer = styled.div`
  width: auto;
  padding: 1rem;
`

const TextComment = styled.p({
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

function CommentController({ id }: { id: string }) {
  const { comment } = useComments(id)

  return (
    <TextContainer>
      <details open>
        <summary>
          <small>
            <span>{comment?.by}</span>
            <span>.</span>
          </small>
        </summary>

        <TextComment>{comment?.text}</TextComment>
      </details>

      {(comment?.kids?.length ?? false) && (
        <CommentListController ids={comment?.kids?.slice(0, 10).map((id) => id.toString()) ?? []} />
      )}
    </TextContainer>
  )
}

export default CommentsPage
