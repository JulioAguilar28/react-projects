import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons'
import { useCart } from '../../hooks/useCart'
import CartView from './CartView'
import './Cart.css'

function CartController() {
  const { cart, addProductQuantity, clearCart } = useCart()

  const cartCheckboxId = useId()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((cartProduct) => (
            <CartView
              key={cartProduct.id}
              cartProduct={cartProduct}
              onAddProductQuantity={addProductQuantity}
            />
          ))}
        </ul>

        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default CartController
