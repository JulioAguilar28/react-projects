import { Story, Comment } from '../models/Story'

export const getTopStories = async (page: number, limit: number): Promise<Array<number>> => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  const json = await response.json()

  // page starts with 1
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const ids = json.slice(startIndex, endIndex)

  return ids
}

export const getItemInfo = async <T extends Story | Comment>(id: string) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const json = await response.json()

  return json as T
}
