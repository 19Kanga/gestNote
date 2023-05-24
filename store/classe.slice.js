import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ClasseService from '../services/classeService';

const initialState = {
  Classe: [],
  ClasseId: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get user Classes
export const getClasses = createAsyncThunk (
  'Classe/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState ().auth.user.token;
      return await ClasseService.getClasses ();
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

// Get user Classes
export const getClasseById = createAsyncThunk (
  'Classe/id',
  async (id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState ().auth.user.token;
      return await ClasseService.getClasseById (id);
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

export const classeSlice = createSlice ({
  name: 'classe',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      //   .addCase (createClasse.pending, state => {
      //     state.isLoading = true;
      //   })
      //   .addCase (createClasse.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.isSuccess = true;
      //     state.Classes.push (action.payload);
      //   })
      //   .addCase (createClasse.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.isError = true;
      //     state.message = action.payload;
      //   })
      .addCase (getClasses.pending, state => {
        state.isLoading = true;
      })
      .addCase (getClasses.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.Classe = action.payload;
      })
      .addCase (getClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase (getClasseById.pending, state => {
        state.isLoading = true;
      })
      .addCase (getClasseById.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.ClasseId = action.payload;
      })
      .addCase (getClasseById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
    //   .addCase (deleteClasse.pending, state => {
    //     state.isLoading = true;
    //   })
    //   .addCase (deleteClasse.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.Classes = state.Classes.filter (
    //       Classe => Classe._id !== action.payload.id
    //     );
    //   })
    //   .addCase (deleteClasse.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //   });
  },
});

export const {reset} = classeSlice.actions;
export default classeSlice.reducer;
