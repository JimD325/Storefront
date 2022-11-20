import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'



export interface ItemInCart {
  image: string
  name: string,
  price: number,
  quantityOfThisItemInCart: number
}

export interface ShoppingCartInterface {
  itemsInCart: ItemInCart[],
}

const initialState: ShoppingCartInterface = {
  itemsInCart: [],
}


export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemInCart>) => {
      // if we have a cart with items
      for(const product of state.itemsInCart){
        if(product.name === action.payload.name){
          product.quantityOfThisItemInCart++;
          return
        }
      }
      state.itemsInCart.push({...action.payload})
    },

    incrementAmountInCart: (state, action: PayloadAction<ItemInCart>) => {
      state.itemsInCart.forEach(obj => {
        if (obj.name === action.payload.name) {
          obj.quantityOfThisItemInCart++
        }
      })
    },

    decrementAmountInCart: (state, action: PayloadAction<ItemInCart>) => {
      for (let i = 0; i < state.itemsInCart.length; i++) {
        // if the item we are attempting to remove 1 of from the cart is in the cart, then remove one from the cart
        if (state.itemsInCart[i].name === action.payload.name) {
          state.itemsInCart[i].quantityOfThisItemInCart--;
        }
        // if amount of items in cart is zero, remove the card of the item from the cart
        if (state.itemsInCart[i].quantityOfThisItemInCart < 1) {
          state.itemsInCart.splice(i, 1)
          state.itemsInCart = [...state.itemsInCart]
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementAmountInCart, decrementAmountInCart } = cartSlice.actions

export const itemsInCart = (state: RootState): string | undefined => state.selectedCollections.selectedCollectionName


export default cartSlice.reducer