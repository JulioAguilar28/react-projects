import { useState, useEffect, useMemo, useRef, ChangeEvent } from 'react'
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

export enum FilterOption {
  None = 'none',
  Country = 'country',
  Name = 'name',
  Lastname = 'lastname'
}

function RandomUsersController() {
  const [users, setUsers] = useState<Array<User>>([])
  const [bodyColors, setBodyColors] = useState<boolean>(false)
  const [filter, setFilter] = useState<FilterOption>(FilterOption.None)
  const [countryFilter, setCountryFilter] = useState<string>('')
  /**
   * Using a ref value, we can persist the value
   * between each render
   */
  const originalUsers = useRef<Array<User>>([])

  useEffect(() => {
    const data = randomUsersResponse.results
    const parsedUsers = data.map(parseUser)
    setUsers(parsedUsers)
    originalUsers.current = parsedUsers
  }, [])

  const filterUsersByCountry = (users: Array<User>, country: string) =>
    users.filter((user) => user.country.toLowerCase().includes(country.toLowerCase()))

  const filterUsersByCountryAlphabetically = (users: Array<User>) => {
    return users.sort((userA, userB) => {
      const countryA = userA.country.toLowerCase()
      const countryB = userB.country.toLowerCase()

      return countryA < countryB ? -1 : countryA > countryB ? 1 : 0
    })
  }

  const filterUsersByName = (users: Array<User>) => {
    return users.sort((userA, userB) => {
      const nameA = userA.name.toLowerCase()
      const nameB = userB.name.toLowerCase()

      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
    })
  }

  const filterUsersByLastname = (users: Array<User>) => {
    return users.sort((userA, userB) => {
      const nameA = userA.lastname.toLowerCase()
      const nameB = userB.lastname.toLowerCase()

      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
    })
  }

  const filterOperation = useMemo(() => {
    const operations = {
      [FilterOption.Country]: filterUsersByCountryAlphabetically,
      [FilterOption.Name]: filterUsersByName,
      [FilterOption.Lastname]: filterUsersByLastname,
      [FilterOption.None]: (users: Array<User>) => users
    }

    return operations[filter]
  }, [filter])

  const filteredUsers = useMemo(() => {
    if (countryFilter !== '') return filterUsersByCountry([...users], countryFilter)

    return filterOperation([...users])
  }, [users, filterOperation, countryFilter])

  const handleChangeColors = () => {
    setBodyColors(!bodyColors)
  }

  const handleSortByCountry = () => {
    setFilter(filter === FilterOption.None ? FilterOption.Country : FilterOption.None)
  }

  const handleSetCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountryFilter(event.currentTarget.value)
    // const filteredUsers = filterUsersByCountry([...users], event.currentTarget.value)
    // setUsers(filteredUsers)
  }

  const handleDeleteUser = (userId: string) => {
    const newUsers = [...users].filter((user) => user.id !== userId)
    setUsers(newUsers)
  }

  const handleRestoreState = () => {
    setUsers(originalUsers.current)
  }

  const handleUsersFilter = (filter: FilterOption) => {
    setFilter(filter)
  }

  return (
    <section className="w-full flex flex-col gap-y-9">
      <div className="w-auto self-center flex gap-x-4">
        <button onClick={handleChangeColors}>Cambiar colores</button>

        <button onClick={handleSortByCountry}>
          {filter === FilterOption.Country ? 'No ordenar por país' : 'Ordenar por país'}
        </button>

        <button onClick={handleRestoreState}>Resetear estado</button>

        <input type="text" placeholder="Brazil, Australia, ..." onChange={handleSetCountry} />
      </div>

      <table width="100%" className="border-separate border-spacing-1">
        <thead>
          <tr>
            <th>Foto</th>
            <th onClick={() => handleUsersFilter(FilterOption.Name)}>Nombre</th>
            <th onClick={() => handleUsersFilter(FilterOption.Lastname)}>Apellido</th>
            <th onClick={() => handleUsersFilter(FilterOption.Country)}>País</th>
            <th>Acciones</th>
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
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Borrar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default RandomUsersController
