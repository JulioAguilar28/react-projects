/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext } from 'react'
import { CartProduct, Product } from '../models/Products'
import { useCartReducer } from '../hooks/useCartReducer'

interface CartContextState {
  cart: Array<CartProduct>
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  addProductQuantity: (cartProduct: CartProduct) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextState>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addProductQuantity: () => {},
  clearCart: () => {}
})

type Props = {
  children: ReactNode
}

export function CartProvider({ children }: Props) {
  const { state, addToCart, removeFromCart, addProductQuantity, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        addProductQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
