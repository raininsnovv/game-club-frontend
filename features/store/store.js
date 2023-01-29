import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from '../slice/bookingSlice'
import { bookingReducer } from '../slice/bookingSlice2'

export const store = configureStore({
  reducer: {
    bookingSlice,
    bookingReducer,
  },
})
