import { useState, useEffect, useRef } from 'react'
import { parseUser, User } from '../models/User'

export function useUsers() {
  const [users, setUsers] = useState<Array<User>>([])
  /**
   * Using a ref value, we can persist the value
   * between each render
   */
  const originalUsers = useRef<Array<User>>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100').then(async (response) => {
      const data = await response.json()
      const parsedUsers = data.results.map(parseUser)
      setUsers(parsedUsers)
      originalUsers.current = parsedUsers
    })
  }, [])

  return { users, setUsers, originalUsers }
}
