import { Reducer } from 'react'
import { Product, CartProduct } from '~/models/Products'

export enum CartActionKind {
  AddToCart = 'addtocart',
  RemoveFromCart = 'removefromcart',
  AddProductQuantity = 'addproductquantity',
  ClearCart = 'clearcart'
}

interface CartAction {
  type: CartActionKind
  payload?: Product
}

type CartState = Array<CartProduct>

export const cartReducer: Reducer<CartState, CartAction> = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CartActionKind.AddToCart:
      return addToCart(state, actionPayload as Product)

    case CartActionKind.RemoveFromCart:
      return removeFromCart(state, actionPayload as Product)

    case CartActionKind.AddProductQuantity:
      return addProductQuantity(state, actionPayload as Product)

    case CartActionKind.ClearCart:
      return clearCart()

    default:
      return state
  }
}

const addToCart = (state: CartState, product: Product): CartState => {
  const alreadyInCart = state.some((cartProduct) => cartProduct.id === product.id)
  if (alreadyInCart) return state

  return [...state, { ...product, quantity: 1 }]
}

const removeFromCart = (state: CartState, product: Product): CartState => {
  return state.filter((cartProduct) => cartProduct.id !== product.id)
}

const clearCart = () => []

const addProductQuantity = (state: CartState, product: Product): CartState => {
  const productIndex = state.findIndex((cartProduct) => cartProduct.id === product.id)

  if (productIndex > -1) {
    const newCart = structuredClone(state)
    newCart[productIndex].quantity += 1
    return newCart
  }

  return state
}
