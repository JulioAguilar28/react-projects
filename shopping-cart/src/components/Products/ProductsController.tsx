import { useState } from 'react'
import { products as initialProducts } from '../../mocks/products.json'
import ProductView from './ProductView'
import { Product } from '~/models/Products'
import { useFilters } from '../../hooks/useFilters'
import './Products.css'

function ProductsController() {
  const [products, setProducts] = useState<Array<Product>>(initialProducts)

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <main className="products">
      <ul>
        {filteredProducts.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </ul>
    </main>
  )
}

export default ProductsController
