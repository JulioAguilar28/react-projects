/* eslint-disable @typescript-eslint/no-empty-function */
import { CartProduct } from '../../models/Products'

type Props = {
  cartProduct: CartProduct
  onAddProductQuantity?: (cartProduct: CartProduct) => void
}

function CartView({ cartProduct, onAddProductQuantity = () => {} }: Props) {
  const clickHandler = () => {
    onAddProductQuantity(cartProduct)
  }

  return (
    <li>
      <img src={cartProduct.thumbnail} alt={cartProduct.title} />
      <div>
        <strong>{cartProduct.title}</strong> - ${cartProduct.price}
      </div>
      <footer>
        <small>Qty: {cartProduct.quantity}</small>
        <button onClick={clickHandler}>+</button>
      </footer>
    </li>
  )
}

export default CartView
