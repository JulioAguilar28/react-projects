import ProductsController from './components/Products/ProductsController'
import Header from './components/Header'
import CartController from './components/Cart/CartController'
import { CartProvider } from './context/Cart'

function App() {
  return (
    <CartProvider>
      <Header />
      <CartController />
      <ProductsController />
    </CartProvider>
  )
}

export default App
