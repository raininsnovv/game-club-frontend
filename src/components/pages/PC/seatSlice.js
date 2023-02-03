import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  loading: false,
  seats: [],
};

export const fetchSeats = createAsyncThunk('seats/fetch', async (_, thunkAPI) => {
  try {
    const res = await fetch('http://localhost:5000/seat');
    const seats = await res.json();

    if (seats.error) {
      return thunkAPI.rejectWithValue(seats.error);
    }

    return thunkAPI.fulfillWithValue(seats);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const addBooking = createAsyncThunk(
//   'seats/add',
//   async ({ seat, date, player, hours }, thunkAPI) => {
//     try {
//       const res = await fetch(`http://localhost:4000/booking/${seat}`, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify({ seat, player, date, hours }),
//       });
//       const booking = await res.json();

//       if (booking.error) {
//         return thunkAPI.rejectWithValue(booking.error);
//       }

//       return thunkAPI.fulfillWithValue(booking);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //seats get
      .addCase(fetchSeats.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeats.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.seats = action.payload;
      })
      .addCase(fetchSeats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default seatSlice.reducer;
