import { useState, useEffect, useMemo, ChangeEvent } from 'react'
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
  const [bodyColors, setBodyColors] = useState<boolean>(false)
  const [sortByCountry, setSortByCountry] = useState<boolean>(false)
  const [countryFilter, setCountryFilter] = useState<string>('')

  useEffect(() => {
    const data = randomUsersResponse.results
    const parsedUsers = data.map(parseUser)
    setUsers(parsedUsers)
  }, [])

  const filteredUsersByCountryAlphabetically = useMemo(() => {
    if (!sortByCountry) return users

    return [...users].sort((userA, userB) => {
      const countryA = userA.country.toLowerCase()
      const countryB = userB.country.toLowerCase()

      return countryA < countryB ? -1 : countryA > countryB ? 1 : 0
    })
  }, [users, sortByCountry])

  const filteredUsersByCountry = useMemo(() => {
    if (countryFilter === '') return users

    return [...users].filter((user) =>
      user.country.toLowerCase().includes(countryFilter.toLowerCase())
    )
  }, [users, countryFilter])

  const filteredUsers = countryFilter
    ? filteredUsersByCountry
    : filteredUsersByCountryAlphabetically

  const handleChangeColors = () => {
    setBodyColors(!bodyColors)
  }

  const handleSortByCountry = () => {
    setSortByCountry(!sortByCountry)
  }

  const handleSetCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountryFilter(event.currentTarget.value)
  }

  return (
    <section className="w-full flex flex-col gap-y-9">
      <div className="w-auto self-center flex gap-x-4">
        <button onClick={handleChangeColors}>Cambiar colores</button>

        <button onClick={handleSortByCountry}>
          {sortByCountry ? 'No ordenar por país' : 'Ordenar por país'}
        </button>

        <input type="text" onChange={handleSetCountry} />
      </div>

      <table width="100%" className="border-separate border-spacing-1">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
          </tr>
        </thead>

        <tbody className={bodyColors ? 'even-odd-colors' : ''}>
          {filteredUsers.map((user) => {
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
