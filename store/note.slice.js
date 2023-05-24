import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import NoteService from '../services/noteService';

const initialState = {
  Note: [],
  NoteId: [],
  NoteClasses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new Note
// export const createNote = createAsyncThunk (
//   'Notes/create',
//   async (NoteData, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState ().auth.user.token;
//       return await NoteService.createNote (NoteData, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString ();
//       return thunkAPI.rejectWithValue (message);
//     }
//   }
// );

// Get user Notes
export const getNotes = createAsyncThunk (
  'Note/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState ().auth.user.token;
      return await NoteService.getNotes ();
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

// Get user Notes
export const getNoteById = createAsyncThunk (
  'Note/id',
  async (id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState ().auth.user.token;
      return await NoteService.getNoteById (id);
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
export const getNoteByClassId = createAsyncThunk (
  'ClassNote/classId',
  async (id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState ().auth.user.token;
      return await NoteService.getNotesByClassId (id);
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

// Delete user Note
// export const deleteNote = createAsyncThunk (
//   'Notes/delete',
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState ().auth.user.token;
//       return await NoteService.deleteNote (id, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString ();
//       return thunkAPI.rejectWithValue (message);
//     }
//   }
// );

export const NoteSlice = createSlice ({
  name: 'note',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      //   .addCase (createNote.pending, state => {
      //     state.isLoading = true;
      //   })
      //   .addCase (createNote.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.isSuccess = true;
      //     state.Notes.push (action.payload);
      //   })
      //   .addCase (createNote.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.isError = true;
      //     state.message = action.payload;
      //   })
      .addCase (getNotes.pending, state => {
        state.isLoading = true;
      })
      .addCase (getNotes.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.Note = action.payload;
      })
      .addCase (getNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase (getNoteById.pending, state => {
        state.isLoading = true;
      })
      .addCase (getNoteById.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.NoteId = action.payload;
      })
      .addCase (getNoteById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase (getNoteByClassId.pending, state => {
        state.isLoading = true;
      })
      .addCase (getNoteByClassId.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.NoteClasses = action.payload;
      })
      .addCase (getNoteByClassId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset} = NoteSlice.actions;
export default NoteSlice.reducer;
