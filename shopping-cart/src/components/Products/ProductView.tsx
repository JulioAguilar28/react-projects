import { AddToCartIcon } from '../Icons'
import { Product } from '~/models/Products'

type Props = {
  product: Product
}

function ProductView({ product }: Props) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button>
          <AddToCartIcon />
        </button>
      </div>
    </li>
  )
}

export default ProductView
