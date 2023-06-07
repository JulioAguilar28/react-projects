export interface Story {
  id: number
  by: string
  kids: Array<number>
  score: number
  time: number
  title: string
  type: string
  url: string
}

export interface Comment {
  id: number
  by: string
  kids: Array<number>
  parent: number
  text: string
  time: number
  type: string
}
