import { useState, useMemo } from 'react'
import { User } from '../models/User'

export enum FilterOption {
  None = 'none',
  Country = 'country',
  Name = 'name',
  Lastname = 'lastname'
}

export function useUserFilters({ users }: { users: Array<User> }) {
  const [filter, setFilter] = useState<FilterOption>(FilterOption.None)
  const [countryFilter, setCountryFilter] = useState<string>('')

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

  return {
    filter,
    filteredUsers,
    setFilter,
    setCountryFilter
  }
}
