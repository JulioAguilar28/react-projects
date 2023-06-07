import useSWR from 'swr'
import * as StoryService from '../services/StoryService'
import { Comment } from '../models/Story'

export default function useComments(id: string) {
  const { data, error, isLoading } = useSWR(`/comment/${id}`, () =>
    StoryService.getItemInfo<Comment>(id)
  )

  return { comment: data, error, isLoading }
}
