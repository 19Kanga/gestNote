import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import classeReducer from './classe.slice';
import noteReducer from './note.slice';
import detailNoteReducer from './detailNote.slice';

export const store = configureStore ({
  reducer: {
    auth: authReducer,
    classe: classeReducer,
    note: noteReducer,
    detailenote: detailNoteReducer,
  },
});
