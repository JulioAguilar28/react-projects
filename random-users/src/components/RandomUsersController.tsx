import { useState, ChangeEvent } from 'react'
import { useUserFilters, FilterOption } from '../hooks/useUserFilter'
import { useUsers } from '../hooks/useUsers'

function RandomUsersController() {
  const { users, setUsers, originalUsers } = useUsers()
  const { filter, filteredUsers, setFilter, setCountryFilter } = useUserFilters({ users })
  const [bodyColors, setBodyColors] = useState<boolean>(false)

  const handleChangeColors = () => {
    setBodyColors(!bodyColors)
  }

  const handleSortByCountry = () => {
    setFilter(filter === FilterOption.None ? FilterOption.Country : FilterOption.None)
  }

  const handleSetCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountryFilter(event.currentTarget.value)
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
          {filteredUsers.map((user, index) => {
            return (
              <tr key={`user-id-${user.id || index}`} className="text-center align-middle">
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
