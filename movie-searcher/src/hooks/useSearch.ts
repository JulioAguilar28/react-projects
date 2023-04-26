import { useState, useRef, useEffect } from 'react'

export default function useSearch() {
  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  /**
   * We use a useRef hook, since it keeps its state
   * and does not apply a render when it changes
   */
  const isSearchDirty = useRef<boolean>(false)

  const setSearchHandler = (search: string) => {
    if (search.startsWith(' ')) return
    setSearch(search)
  }

  useEffect(() => {
    if (!isSearchDirty.current) {
      isSearchDirty.current = search !== ''
      return
    }

    if (search === '') {
      setError('We cannot search an empty movie')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('We cannot search a movie with a number')
      return
    }

    if (search.length < 3) {
      setError('The search must contains at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearchHandler, error }
}
