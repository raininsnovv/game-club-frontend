import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  booking: [],
}

export const fetchBooking = createAsyncThunk(
  'booking/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('http://localhost:4000/booking')
      const booking = await res.json()

      if (booking.error) {
        return thunkAPI.rejectWithValue(booking.error)
      }
      console.log(booking)
      return thunkAPI.fulfillWithValue(booking)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addBooking = createAsyncThunk(
  'booking/add',
  async ({ seat, date, player, hours }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/booking/${seat}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ seat, player, date, hours }),
      })
      const booking = await res.json()

      if (booking.error) {
        return thunkAPI.rejectWithValue(booking.error)
      }

      return thunkAPI.fulfillWithValue(booking)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooking.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.booking = action.payload
      })
      .addCase(fetchBooking.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(addBooking.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.booking = action.payload
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default bookingSlice.reducer
