import productsMock from '../../mocks/products.json'
import ProductView from './ProductView'
import './Products.css'

function ProductsController() {
  return (
    <main className="products">
      <ul>
        {productsMock.products.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </ul>
    </main>
  )
}

export default ProductsController
