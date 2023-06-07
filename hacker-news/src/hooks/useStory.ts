import useSWR from 'swr'
import * as StoryService from '../services/StoryService'
import { Story } from '../models/Story'

export default function useStory(id: string) {
  const { data, error, isLoading } = useSWR(`/story/${id}`, () =>
    StoryService.getItemInfo<Story>(id)
  )

  return { story: data, error, isLoading }
}
