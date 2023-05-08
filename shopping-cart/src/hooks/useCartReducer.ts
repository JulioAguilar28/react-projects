import { useReducer } from 'react'
import { cartReducer, CartActionKind } from '../reducers/CartReducer'
import { Product, CartProduct } from '../models/Products'

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, [])

  const addToCart = (product: Product) => {
    dispatch({ type: CartActionKind.AddToCart, payload: product })
  }

  const addProductQuantity = (cartProduct: CartProduct) => {
    dispatch({ type: CartActionKind.AddProductQuantity, payload: cartProduct })
  }

  const clearCart = () => {
    dispatch({ type: CartActionKind.ClearCart })
  }

  const removeFromCart = (cartProduct: Product) => {
    dispatch({ type: CartActionKind.RemoveFromCart, payload: cartProduct })
  }

  return {
    state,
    addToCart,
    addProductQuantity,
    clearCart,
    removeFromCart
  }
}
