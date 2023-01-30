import { configureStore } from '@reduxjs/toolkit'
import { bookingReducer } from '../reducers/bookingReducer'
import bookingSlice from '../slice/bookingSlice'

export const store = configureStore({
  reducer: {
    bookingSlice,
    bookingReducer,
  },
})
