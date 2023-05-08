import { useContext } from 'react'
import { FiltersContext } from '../context/Filters'
import { Product } from '../models/Products'

export function useFilters() {
  const filtersContext = useContext(FiltersContext)

  const filterProducts = (products: Array<Product>) => {
    return products.filter(
      (product) =>
        product.price >= filtersContext.minPrice &&
        (filtersContext.category === 'all' || product.category === filtersContext.category)
    )
  }

  return { filterProducts, ...filtersContext }
}
