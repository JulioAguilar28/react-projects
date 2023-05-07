/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useState } from 'react'
import { CartProduct, Product } from '../models/Products'

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
  const [cart, setCart] = useState<Array<CartProduct>>([])

  const addToCart = (product: Product) => {
    const alreadyInCart = cart.some((cartProduct) => cartProduct.id === product.id)

    if (alreadyInCart) return

    setCart((oldState) => [
      ...oldState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const addProductQuantity = (cartProduct: CartProduct) => {
    const productIndex = cart.findIndex((product) => cartProduct.id === product.id)

    if (productIndex > -1) {
      const newCart = structuredClone(cart)
      newCart[productIndex].quantity += 1
      setCart(newCart)
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (cartProduct: Product) => {
    setCart((oldState) => oldState.filter((oldCartProduct) => oldCartProduct.id !== cartProduct.id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
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
