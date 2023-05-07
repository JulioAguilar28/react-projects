/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useState } from 'react'

interface FiltersContextState {
  category: string
  /**
   * Safety category setter
   * @param category the category to set
   * @returns void
   */
  setCategory: (category: string) => void
  minPrice: number
  /**
   * Safety min price setter
   * @param category the min price to set
   * @returns void
   */
  setMinPrice: (minPrice: number) => void
}

/**
 * This is the consumer data, the only source of truth
 */
export const FiltersContext = createContext<FiltersContextState>({
  category: 'all',
  setCategory: () => {},
  minPrice: 0,
  setMinPrice: () => {}
})

type Props = {
  children: ReactNode
}

/**
 * This is the accessor of the single source of truth
 */
export function FiltersProvider({ children }: Props) {
  const [filtersState, setFiltersState] = useState({
    category: 'all',
    minPrice: 0
  })

  /**
   * These functions are a safety way to set the values into the context
   * avoiding unexpected values
   *
   * This is following the man-in-the-middle design pattern
   */

  const setCategory = (category: string) => {
    setFiltersState((oldState) => ({
      ...oldState,
      category
    }))
  }

  const setMinPrice = (minPrice: number) => {
    setFiltersState((oldState) => ({
      ...oldState,
      minPrice
    }))
  }

  return (
    <FiltersContext.Provider
      value={{
        ...filtersState,
        setCategory,
        setMinPrice
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
