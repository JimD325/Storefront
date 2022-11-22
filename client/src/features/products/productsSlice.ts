import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { ProductInterface } from '../../components/storefront/data'
import { ItemInCart } from '../cart/cartSlice'

export interface selectedCollectionState {
  selectedCollectionName: string,
  allProducts: ProductInterface[]
}



const initialState: selectedCollectionState = {
  selectedCollectionName: "none",
  allProducts: []
}

export const fetchAllProducts = createAsyncThunk<ProductInterface[]>(
  'fetchAllProducts',
  async () => {
    const response = await fetch('http://localhost:3001/product');
    const data: ProductInterface[] = await response.json();

    return data;
  }
)


export const selectedCollectionSlice = createSlice({
  name: 'selectedCollection',
  initialState,
  reducers: {
    changeSelectedCollection: (state, action: PayloadAction<string>) => {
      state.selectedCollectionName = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      state.allProducts = [...payload]
    });

   
  }
})



// Action creators are generated for each case reducer function
export const { changeSelectedCollection } = selectedCollectionSlice.actions

export const selectedCollectionName = (state: RootState): string | undefined => state.selectedCollections.selectedCollectionName


export default selectedCollectionSlice.reducer