import { useState } from 'react'
import { products as initialProducts } from '../../mocks/products.json'
import ProductView from './ProductView'
import { Product } from '~/models/Products'
import { useFilters } from '../../hooks/useFilters'
import './Products.css'
import { useCart } from '../../hooks/useCart'

function ProductsController() {
  const [products, setProducts] = useState<Array<Product>>(initialProducts)
  const { cart, addToCart, removeFromCart } = useCart()

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  const isProductInCart = (product: Product) =>
    cart.some((cartProduct) => product.id === cartProduct.id)

  return (
    <main className="products">
      <ul>
        {filteredProducts.map((product) => (
          <ProductView
            key={product.id}
            product={product}
            isOnCart={isProductInCart(product)}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </ul>
    </main>
  )
}

export default ProductsController
