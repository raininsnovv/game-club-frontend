import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

const initialState = {
  data: null,
  isLoading: Boolean(),
  registerStatus: "none",
};

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params, thunkAPI) => {
  try {
    const { data } = await axios.post("/login", params);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

// export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
//   const { data } = await axios.get("/users/myProfile");
//   return data;
// });

export const fetchRegister = createAsyncThunk("auth/fetchRegister", async (params, thunkAPI) => {
  try {
    const { data } = await axios.post("/register", params);
    return console.log(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      window.localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      //авторизация
      .addCase(fetchAuth.pending, (state) => {
        state.isLoading = true;
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
      })
      //регистрация пользователя
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
        state.registerStatus = "none";
      })
      .addCase(fetchRegister.fulfilled, (state) => {
        state.isLoading = false;
        state.registerStatus = "success";
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.isLoading = false;
        state.registerStatus = "fail";
      });
    // //получение данных профиля
    // .addCase(fetchAuthMe.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(fetchAuthMe.fulfilled, (state, action) => {
    //   state.data = action.payload;
    //   state.isLoading = false;
    // })
    // .addCase(fetchAuthMe.rejected, (state) => {
    //   state.isLoading = false;
    //   state.data = null;
    // });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
