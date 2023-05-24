import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Get user from localStorage
const user = JSON.stringify (AsyncStorage.getItem ('user'));
// const token = JSON.stringify (AsyncStorage.getItem ('token'));
// const ad = JSON.parse (localStorage.getItem ('isAdmin'));
// const us = JSON.parse (localStorage.getItem ('isUser'));
// const suc = JSON.parse (localStorage.getItem ('isSuccess'));

const initialState = {
  user: user ? user : null,
  token: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  // mess= mes ? mes : '',
};

// Register user
export const register = createAsyncThunk (
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register (user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
    }
  }
);

// Login user
export const logine = createAsyncThunk (
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const rep = await authService.login (user);
      return rep;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      return thunkAPI.rejectWithValue (message);
      // console.log (error);
    }
  }
);

export const logout = createAsyncThunk ('auth/logout', async () => {
  await authService.logout ();
});

export const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase (register.pending, state => {
        state.isLoading = true;
      })
      .addCase (register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase (register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase (logine.pending, state => {
        state.isLoading = true;
      })
      .addCase (logine.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.user = action.payload;

        // localStorage.setItem ('isSuccess', true);
      })
      .addCase (logine.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
        state.user = null;
      })
      .addCase (logout.fulfilled, state => {
        state.user = null;
        state.token = null;
      });
  },
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;
