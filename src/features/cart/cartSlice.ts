import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface ItemInCart {
  image:string
  name:string,
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
      let holder = action.payload.name

      state.itemsInCart = [...state.itemsInCart, action.payload];
      
      console.log("action.payload on add to cart", action.payload)

    },
    incrementAmountInCart: (state, action: PayloadAction<ItemInCart>) => {
      state.itemsInCart.forEach(obj => {
        if(obj.name === action.payload.name){
          obj.quantityOfThisItemInCart++
        }
      })
      console.log("action.payload on incrementAmountInCart", action.payload)
  
    },

    decrementAmountInCart: (state, action: PayloadAction<ItemInCart>) => {
      for(let i = 0; i < state.itemsInCart.length; i++) {
        if(state.itemsInCart[i].name === action.payload.name){
          state.itemsInCart[i].quantityOfThisItemInCart--;  
        }
        if(state.itemsInCart[i].quantityOfThisItemInCart < 1) {
          state.itemsInCart = [...state.itemsInCart.splice(i,0)]
        }
      }
      
      console.log("action.payload on decremnentAmountInCart", action.payload)

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart ,incrementAmountInCart, decrementAmountInCart } = cartSlice.actions

export const itemsInCart = (state:RootState):string|undefined => state.selectedCollections.selectedCollectionName


export default cartSlice.reducer