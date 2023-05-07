import { useContext, useState } from 'react'
import { products as initialProducts } from '../../mocks/products.json'
import ProductView from './ProductView'
import { Product } from '~/models/Products'
import { FiltersContext } from '../../context/Filters'
import './Products.css'

function ProductsController() {
  const [products, setProducts] = useState<Array<Product>>(initialProducts)
  const { minPrice, category } = useContext(FiltersContext)

  const filterProducts = (products: Array<Product>) => {
    return products.filter(
      (product) =>
        product.price >= minPrice && (category === 'all' || product.category === category)
    )
  }

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
