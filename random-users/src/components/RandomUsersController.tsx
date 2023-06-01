import { useState, useEffect } from 'react'
import randomUsersResponse from '../mocks/random-users.json'

interface User {
  id: string
  name: string
  lastname: string
  photo: string
  country: string
}

const parseUser = (json: any): User => ({
  id: json.id.value,
  name: json.name.first,
  lastname: json.name.last,
  photo: json.picture.thumbnail,
  country: json.location.country
})

function RandomUsersController() {
  const [users, setUsers] = useState<Array<User>>([])

  useEffect(() => {
    const data = randomUsersResponse.results
    const parsedUsers = data.map(parseUser)
    setUsers(parsedUsers)
  }, [])

  return (
    <section className="w-full">
      <table width="100%" className="border-separate border-spacing-y-4">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id} className="text-center align-middle">
                <td className="flex justify-center items-center">
                  <img src={user.photo} alt={`${user.name} thumbnail`} className="rounded-full" />
                </td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.country}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default RandomUsersController
