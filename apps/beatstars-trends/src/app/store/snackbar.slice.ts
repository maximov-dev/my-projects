import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SnackbarState {
   state: 'SUCCESS' | 'ERROR' | 'CLOSED';
   text: string;
}

const initialState: SnackbarState = {
   state: 'CLOSED',
   text: '',
};

export const snackbarSlice = createSlice({
   name: 'snackbar',
   initialState,
   reducers: {
      showSnackbarSuccess: (state, action: PayloadAction<string>) => {
         state.state = 'SUCCESS';
         state.text = action.payload;
      },
      showSnackbarError: (state, action: PayloadAction<string>) => {
         state.state = 'ERROR';
         state.text = action.payload;
      },
      closeSnackbar: (state) => {
         state.state = 'CLOSED';
         state.text = '';
      },
   },
});

export const { showSnackbarSuccess, showSnackbarError, closeSnackbar } =
   snackbarSlice.actions;

export const selectSnackbar = (state: RootState) => state.snackbar;

const snackbarReducer = snackbarSlice.reducer;

export { snackbarReducer };
