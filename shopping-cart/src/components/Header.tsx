import FiltersController from './Filters/FiltersController'

/**
 * I'm using this example, just to learn how to use a context
 * and avoid prop drilling, thats why the FiltersController component
 * is child of header
 */
function Header() {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <FiltersController />
    </header>
  )
}

export default Header
