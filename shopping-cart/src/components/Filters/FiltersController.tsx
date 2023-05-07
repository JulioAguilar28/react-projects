import { useId, ChangeEvent, useContext } from 'react'
import { FiltersContext } from '../../context/Filters'
import './Filters.css'

function FiltersController() {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const { minPrice, setMinPrice, setCategory } = useContext(FiltersContext)

  const setMinPriceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value))
  }

  const setCategoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Min price</label>
        <input
          id={minPriceFilterId}
          type="range"
          min={0}
          max={1000}
          onChange={setMinPriceHandler}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select name={categoryFilterId} id={categoryFilterId} onChange={setCategoryHandler}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default FiltersController
