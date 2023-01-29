import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSeats = createAsyncThunk(
  'seat/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/seat')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const fetchBookings = createAsyncThunk(
  'booking/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/booking')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const fetchSeatBooking = createAsyncThunk(
  'bookingBySeat/fetch',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/seat/${id}`)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  seats: [],
  bookings: [],
  bookingsBySeats: [],
  isLoading: true,
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //SEATS.GET
      .addCase(fetchSeats.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchSeats.fulfilled, (state, action) => {
        state.seats = action.payload
        state.isLoading = false
      })
      .addCase(fetchSeats.rejected, (state) => {
        state.isLoading = false
        state.seats = []
      })
      //BOOKINGS.GET
      .addCase(fetchBookings.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload
        state.isLoading = false
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.isLoading = false
        state.bookings = []
      })
      //BOOKING BY SEATS GET
      .addCase(fetchSeatBooking.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchSeatBooking.fulfilled, (state, action) => {
        state.bookingsBySeats = action.payload
        state.isLoading = false
      })
      .addCase(fetchSeatBooking.rejected, (state) => {
        state.isLoading = false
        state.bookingsBySeats = []
      })
  },
})

export const bookingReducer = bookingSlice.reducer
