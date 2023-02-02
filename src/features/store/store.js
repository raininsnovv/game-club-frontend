import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from '../slice/bookingSlice';
import seatSlice from '../slice/seatSlice';

export const store = configureStore({
  reducer: {
    bookingSlice,
    seatSlice,
  },
});
