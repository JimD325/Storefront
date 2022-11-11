import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface selectedCollectionState {
  selectedCollectionName: string
}

const initialState: selectedCollectionState = {
  selectedCollectionName: "none"
}

export const selectedCollectionSlice = createSlice({
  name: 'selectedCollection',
  initialState,
  reducers: {
    changeSelectedCollection: (state, action: PayloadAction<string>) => {
      state.selectedCollectionName = action.payload;
      console.log("action.payload", action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSelectedCollection } = selectedCollectionSlice.actions

export const selectedCollectionName = (state:RootState):string|undefined => state.selectedCollections.selectedCollectionName


export default selectedCollectionSlice.reducer