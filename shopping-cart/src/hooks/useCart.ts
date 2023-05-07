import { useContext } from 'react'
import { CartContext } from '../context/Cart'

export function useCart() {
  const cartContext = useContext(CartContext)

  if (cartContext === undefined) throw new Error('The cart context must be used with CartProvider')

  return { ...cartContext }
}
