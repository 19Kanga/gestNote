import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import detailNoteService from '../services/detailNoteService';

const initialState = {
  detailNote: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get user detailNotes
export const getDetailNoteById = createAsyncThunk (
  'detailNote/id',
  async (id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState ().auth.user.token;
      return await detailNoteService.getDetailNoteById (id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString ();
      console.log (error);
      return thunkAPI.rejectWithValue (message);
    }
  }
);

export const detailNoteSlice = createSlice ({
  name: 'detailenote',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      //   .addCase (createdetailNote.pending, state => {
      //     state.isLoading = true;
      //   })
      //   .addCase (createdetailNote.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.isSuccess = true;
      //     state.detailNotes.push (action.payload);
      //   })
      //   .addCase (createdetailNote.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.isError = true;
      //     state.message = action.payload;
      //   })
      .addCase (getDetailNoteById.pending, state => {
        state.isLoading = true;
      })
      .addCase (getDetailNoteById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.detailNote = action.payload;
      })
      .addCase (getDetailNoteById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = detailNoteSlice.actions;
export default detailNoteSlice.reducer;
