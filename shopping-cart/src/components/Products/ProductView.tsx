/* eslint-disable @typescript-eslint/no-empty-function */
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import { Product } from '~/models/Products'

type Props = {
  product: Product
  isOnCart: boolean
  onAddToCart?: (product: Product) => void
  onRemoveFromCart?: (product: Product) => void
}

function ProductView({
  product,
  isOnCart = false,
  onAddToCart = () => {},
  onRemoveFromCart = () => {}
}: Props) {
  const clickHandler = () => {
    const operation = isOnCart ? onRemoveFromCart : onAddToCart
    operation(product)
  }

  const backgroundColor = isOnCart ? '#ff5733' : '#09f'
  const componentIcon = isOnCart ? <RemoveFromCartIcon /> : <AddToCartIcon />

  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <div>
        <button style={{ backgroundColor }} onClick={clickHandler}>
          {componentIcon}
        </button>
      </div>
    </li>
  )
}

export default ProductView
