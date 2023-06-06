import useSWR from 'swr'
import * as StoryService from '../services/StoryService'

export default function useStory(id: number) {
  const { data, error, isLoading } = useSWR(`/story/${id}`, () => StoryService.getStoryInfo(id))

  return { story: data, error, isLoading }
}
