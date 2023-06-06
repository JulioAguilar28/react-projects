export interface User {
  id: string
  name: string
  lastname: string
  photo: string
  country: string
}

export const parseUser = (json: any): User => ({
  id: json.id.value,
  name: json.name.first,
  lastname: json.name.last,
  photo: json.picture.thumbnail,
  country: json.location.country
})
