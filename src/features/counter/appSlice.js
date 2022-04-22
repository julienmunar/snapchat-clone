import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  user: null,
  selectedImage: null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user=action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

    },
    logout: (state) => {
      state.user = null;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    usedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },


});

export const { usedImage, logout, login } = appSlice.actions;



export const selectselectedImage = (state) => state.app.selectedImage;
export const selectUser = (state) => state.app.user;

export default appSlice.reducer;
