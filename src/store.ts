import { configureStore, createReducer } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import selectedCollectionsReducer from './features/products/productsSlice'
import cartReducer from './features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectedCollections: selectedCollectionsReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch